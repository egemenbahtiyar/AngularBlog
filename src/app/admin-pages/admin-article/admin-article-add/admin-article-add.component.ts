import { Router } from "@angular/router";
import { MyvalidationService } from "./../../../services/myvalidation.service";
import { Category } from "./../../../models/category";
import { CategoryService } from "./../../../services/category.service";
import { ArticleService } from "./../../../services/article.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validator,
  AbstractControl,
  Validators,
} from "@angular/forms";
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

@Component({
  selector: "app-admin-article-add",
  templateUrl: "./admin-article-add.component.html",
  styleUrls: ["./admin-article-add.component.css"],
})
export class AdminArticleAddComponent implements OnInit {
  public Editor = DecoupledEditor;
  public onReady(editor) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }
  fileData: File = null;
  picture: string = null;
  articleForm: FormGroup;
  success: boolean;
  loading: boolean;
  info: string = null;
  categories: Category[];

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    public myValidationService: MyvalidationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCategory();
    this.articleForm = new FormGroup({
      title: new FormControl("makale başlık 1", Validators.required),
      contentSummary: new FormControl("makale özet 1", Validators.required),
      contentMain: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      picture: new FormControl(""),
    });
  }

  get getControls() {
    return this.articleForm.controls;
  }

  upload(files) {
    this.fileData = files.target.files[0];
    let formData = new FormData();
    formData.append("picture", this.fileData);
    this.articleService.saveArticlePicture(formData).subscribe((result) => {
      console.log(result.path);
      this.picture = result.path;
      this.articleForm.controls.picture.setValue(this.picture);
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.loading = true;
      this.articleService.addArticle(this.articleForm.value).subscribe(
        (data) => {
          this.success = true;
          console.log("eklendi");
          this.router.navigateByUrl("/admin/makale/liste");
        },
        (error) => {
          this.success = false;
          this.info = "bir hata meydana geldi";
          console.log(JSON.stringify(error));
        }
      );
    }
  }
  getCategory() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  displayCategoryName(category) {
    return category.categoryName;
  }
}
