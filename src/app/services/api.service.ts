import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Article, Digest } from "../models/digest.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private baseUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}/articles/`);
  }

  getArticle(articleId: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/articles/${articleId}`);
  }

  getDigests(): Observable<Digest[]> {
    return this.http.get<Digest[]>(`${this.baseUrl}/digests/`);
  }

  getDigest(digestId: number): Observable<Digest> {
    return this.http.get<Digest>(`${this.baseUrl}/digests/${digestId}`);
  }
}
