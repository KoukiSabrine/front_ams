import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles:any;
  idProvider:any;
  id:any;
  constructor(private service:ArticleService,private router:Router,private route: ActivatedRoute){

  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.service.listArticlesByProvider(id).subscribe(
        response => {
          this.articles = response;
        },
        error => {
          // Handle any errors that occurred during the API call
          console.error(error);
        }
      );
    });   
  }

  updateArticle(id:any,idProvider:any ){
    this.router.navigate(['update' + '/' +idProvider + '/' +id])
}

deleteArticle(id:any){
  this.service.deleteArticle(id).subscribe(response => {
    console.log(response);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.service.listArticlesByProvider(id).subscribe(
        response => {
          this.articles = response;
        },
        error => {
          // Handle any errors that occurred during the API call
          console.error(error);
        }
      );
    }); 
  
  })
}
  
  
  
  
  
  
  
    

}
