import { ArticleService } from "src/app/services/article.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-admin-article-list",
  templateUrl: "./admin-article-list.component.html",
  styleUrls: ["./admin-article-list.component.css"],
})
export class AdminArticleListComponent implements OnInit {
  displayedColumns: string[] = [
    "picture",
    "title",
    "category",
    "commentCount",
    "viewCount",
    "publishDate",
    "action",
  ];
  dataSource;
  articles: Article[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticlesWithoutPg().subscribe((data) => {
      this.articles = data;
      this.dataSource = new MatTableDataSource<Article>(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteArticle(id: number) {
    this.articleService.deleteArticle(id).subscribe((data) => {
      let article = this.articles.filter((x) => x.id == id)[0];
      let index = this.articles.indexOf(article);
      this.articles.splice(index, 1);
      this.dataSource = new MatTableDataSource<Article>(this.articles);
      this.dataSource.paginator = this.paginator;
    });
  }
}
