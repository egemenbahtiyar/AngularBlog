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
  default_article: string = "assets/article_empty.jpeg";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public articleService: ArticleService
  ) {}

  ngOnInit() {
    this.articleService.loading = true;
  }
  pageChanged(event) {
    this.articleService.loading = true;
    this.page = event;
    this.router.navigateByUrl(`/sayfa/${this.page}`);
  }
  createRange() {
    var items: number[] = [];
    for (let index = 1; index <= this.loadingItem; index++) {
      items.push(index);
    }
    return items;
  }
}
