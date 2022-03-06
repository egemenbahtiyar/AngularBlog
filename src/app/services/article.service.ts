import { ArticlePg } from "./../models/article-pg";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = "https://localhost:44332/api/Articles";
  private loading = true;

  getArticles(page: number, pageSize: number) {
    let api = `${this.apiUrl}/${page}/${pageSize}`;

    return this.httpClient.get<ArticlePg>(api).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }
}
