import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Route, Router } from '@angular/router';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  providers:any;
  selectedProviderId: any;
constructor(private service:ArticleService,private router: Router,private serviceProvider:ProviderService){

}
ngOnInit() {
  this.serviceProvider.listProviders().subscribe(
    response => {
      this.providers = response;
    }
  );
}

persistArticle(article:any){
   this.serviceProvider.getProvider(article['provider']).subscribe(providerData=>{     
      article.provider=providerData;
      this.service.createArticle(article).subscribe(data => {    this.router.navigate(['listByPovider' + '/' +article['provider']['id']])
    })
    });
    
  }
}

