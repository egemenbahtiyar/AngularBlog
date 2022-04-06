import { Category } from "./../../models/category";
import { Article } from "./../../models/article";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "./../../services/article.service";
import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-article-detail",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnInit {
  article: Article;
  category: Category;

  constructor(
    public articleService: ArticleService,
    private route: ActivatedRoute,
    public domSanitzer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((r) => {
      this.articleService.loading = true;
      let id = Number(this.route.snapshot.paramMap.get("id"));
      this.articleService.getArticle(id).subscribe((data) => {
        this.article = data;
        this.category = data.category;
        this.articleService.ArticleViewCountUp(this.article.id).subscribe();
      });
    });
  }
}
