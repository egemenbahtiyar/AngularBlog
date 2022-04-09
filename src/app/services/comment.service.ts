import { HttpClient } from "@angular/common/http";
import { Comment } from "./../models/comment";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}
  private apiUrl = "https://localhost:44332/api/Comments";
  loading: boolean;

  addComment(comment: Comment) {
    this.loading = true;
    return this.httpClient.post(`${this.apiUrl}`, comment).pipe(
      tap((x) => {
        this.loading = false;
      })
    );
  }

  commentList(id: number) {
    return this.httpClient.get<Comment[]>(`${this.apiUrl}/${id}`);
  }
}
