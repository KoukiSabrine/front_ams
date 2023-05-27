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

    getArticle(id: any) {
      return this.Http.get(this.urlArticles +'/'+ id)
    } 

    updateArticle(article: any,providerId:any) {
      console.log("hhhh",article)
      return this.Http.put(this.urlArticles + '/update/'+ providerId+ '/'+ article['id'], article);
    }

    deleteArticle(id:any){
         return this.Http.delete(this.urlArticles + '/delete/'+ id)
    }

    createArticle(article: any) {
      console.log("yyyyy",article['provider']['id'])
      return this.Http.post(this.urlArticles+ '/add/'+article['provider']['id'],article);
    }
}
