import { CategoryService } from "./../../services/category.service";
import { ArticleService } from "./../../services/article.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-category-articles",
  templateUrl: "./category-articles.component.html",
  styleUrls: ["./category-articles.component.css"],
})
export class CategoryArticlesComponent implements OnInit {
  page = 1;
  articles: Article[] = [];
  totalCount: number;
  pageSize = 5;
  loadingItem: number = 5;
  ajax;
  CategoryId;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if (this.ajax != null) this.ajax.unsubscribe();

      this.articleService.loading = true;
      this.articles = [];
      this.totalCount = 0;
      if (params.get("id")) {
        this.CategoryId = Number(params.get("id"));
      }
      if (params.get("page")) {
        this.page = Number(params.get("page"));
      }

      this.ajax = this.articleService
        .getArticlesWithCategory(this.CategoryId, this.page, this.pageSize)
        .subscribe((data) => {
          console.log(data);
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });
    });
  }
}
