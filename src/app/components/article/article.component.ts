import { ArticleService } from "./../../services/article.service";
import { Article } from "./../../models/article";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnInit {
  @Input() totalCount;
  @Input() articles: Article[];
  @Input() page;
  @Input() pageSize;
  @Input() loadingItem;
  @Input() typeList;
  default_article: string = "assets/article_empty.jpeg";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public articleService: ArticleService
  ) {}
  createRange() {
    var items: number[] = [];
    for (let index = 1; index <= this.loadingItem; index++) {
      items.push(index);
    }
    return items;
  }

  ngOnInit() {
    this.articleService.loading = true;
  }
  pageChanged(event) {
    this.articleService.loading = true;
    this.page = event;

    switch (this.typeList) {
      case "home":
        this.router.navigateByUrl(`/sayfa/${this.page}`);
        break;
      case "category":
        let categoryName = this.route.snapshot.paramMap.get("name");
        let categoryId = this.route.snapshot.paramMap.get("id");
        this.router.navigateByUrl(
          `/kategori/${categoryName}/${categoryId}/sayfa/${this.page}`
        );
      case "search":
        let searchText = this.route.snapshot.queryParamMap.get("s");
        this.router.navigateByUrl(`/arama/sayfa/${this.page}?s=${searchText}`);
        break;
      case "archive":
        let year = this.route.snapshot.paramMap.get("year");
        let month = this.route.snapshot.paramMap.get("month");
        this.router.navigateByUrl(`/arsiv/${year}/${month}/sayfa/${this.page}`);
        break;
      default:
        break;
    }
  }
}
