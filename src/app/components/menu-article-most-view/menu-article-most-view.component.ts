import { ArticleService } from "src/app/services/article.service";
import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-menu-article-most-view",
  templateUrl: "./menu-article-most-view.component.html",
  styleUrls: ["./menu-article-most-view.component.css"],
})
export class MenuArticleMostViewComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articles = [];
    this.articleService.getGetArticlesByMostViewed().subscribe((data) => {
      this.articles = data;
    });
  }
}
