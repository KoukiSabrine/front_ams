import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  urlArticles="http://localhost:8080/articles"
  constructor(private Http: HttpClient) { }
  
  listArticles() {
    return this.Http.get(this.urlArticles + '/list');
    }

  listArticlesByProvider(id:any) {
    console.log("hello",id)
    return this.Http.get(this.urlArticles + '/listByPovider/' + id);
    }
}
