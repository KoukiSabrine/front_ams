import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  id:any;
  articleToUpdate:any;
  label:any;
  price:any;
  picture:any;
  providerId:any;
constructor(private service:ArticleService,private route:ActivatedRoute,private router:Router){
}
ngOnInit() {
   this.route.paramMap.subscribe(
    params => {
    this.id = params.get('id');
    this.providerId=params.get('idProvider');
    }
    );
    this.service.getArticle(this.id).subscribe(
      (article:any)=>{
                      this.label=article.label;
                      this.price = article.price;
                      this.picture = article.picture;
                      console.log(article);
                    }
    );
  }

  updateArticle(){
    let article={
      "id":this.id,
      "label":this.label,
      "price":this.price,
      "picture":this.picture
    };
    this.service.updateArticle(article,this.providerId).subscribe(
         data =>this.router.navigate(['listByPovider' + '/' +this.providerId])
    );
  
  } 
   
}

