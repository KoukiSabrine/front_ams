import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  urlArticles="http://localhost:8080/articles"
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');
  basicToken:any =sessionStorage.getItem('basicToken');

  constructor(private Http: HttpClient) { }
  
  listArticles() {
    return this.Http.get(this.urlArticles + '/list');
    }

  listArticlesByProvider(id:any) {   
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
 
    return this.Http.get(this.urlArticles + '/listByPovider/' + id, { headers });
    }

    getArticle(id: any) {
      return this.Http.get(this.urlArticles +'/'+ id)
    } 

    updateArticle(article: any,providerId:any) {
      return this.Http.put(this.urlArticles + '/update/'+ providerId+ '/'+ article['id'], article);
    }

    deleteArticle(id:any){
         return this.Http.delete(this.urlArticles + '/delete/'+ id)
    }

    createArticle(article: any) {
      return this.Http.post(this.urlArticles+ '/add/'+article['provider']['id'],article);
    }
}
