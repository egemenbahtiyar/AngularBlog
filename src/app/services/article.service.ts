import { Archive } from "./../models/archive";
import { ArticlePg } from "./../models/article-pg";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Article } from "../models/article";
@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = "https://localhost:44332/api/Articles";
  public loading = true;

  getArticlesWithoutPg() {
    return this.httpClient.get<Article[]>(this.apiUrl);
  }
  getArticles(page: number, pageSize: number) {
    let api = `${this.apiUrl}/${page}/${pageSize}`;

    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  getSearchArticles(sarchText: string, page: number, pageSize: number) {
    let api = `${this.apiUrl}/SearchArticles/${sarchText}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  getArticle(id: number) {
    let api = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Article>(api).pipe(
      tap((r) => {
        this.loading = false;
      })
    );
  }
  getArticlesWithCategory(categoryId: number, page: number, pageSize: number) {
    let api = `${this.apiUrl}/GetArticlesWithCategory/${categoryId}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  getGetArticlesByMostViewed() {
    let api = `${this.apiUrl}/GetArticlesByMostViewed`;
    return this.httpClient.get<Article[]>(api);
  }
  getArticlesArchive() {
    let api = `${this.apiUrl}/GetArticlesArchive`;
    return this.httpClient.get<Archive[]>(api);
  }
  getGetArticleArchiveList(
    year: number,
    month: number,
    page: number,
    pageSize: number
  ) {
    let api = `${this.apiUrl}/GetArticleArchiveList/${year}/${month}/${page}/${pageSize}`;
    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
  ArticleViewCountUp(id: number) {
    let api = `${this.apiUrl}/ArticleViewCountUp/${id}`;
    return this.httpClient.get(api);
  }
  saveArticlePicture(image) {
    return this.httpClient.post<any>(
      `${this.apiUrl}/SaveArticlePicture`,
      image
    );
  }
  addArticle(article: Article) {
    return this.httpClient.post(this.apiUrl, article);
  }
  updateArticle(id: number, article: Article) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, article);
  }
  deleteArticle(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
