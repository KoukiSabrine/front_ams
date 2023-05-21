import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './article.service';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders = 'http://127.0.0.1:8080/providers/';


  constructor(private Http: HttpClient, private articleService: ArticleService) { }
  listProviders() {
    return this.Http.get(this.urlProviders);
  }

  deleteProvider(idProvider: any) {
    return this.Http.delete(this.urlProviders + idProvider)
  }
  updateProvider(provider: any) {
    return this.Http.put(this.urlProviders + provider['id'], provider);
  }


  createProvider(provider: any) {
    return this.Http.post(this.urlProviders, provider);
  }


  getProvider(id: any) {
    return this.Http.get(this.urlProviders + id)
  } 
}
