import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  private id:any;
  private articleToUpdate:any;
  private label:any;
  private price:any;
  private picture:any;
constructor(private service:ArticleService,private route:ActivatedRoute){
}
ngOnInit() {
   this.route.paramMap.subscribe(
    params => {
    this.id = params.get('id');
    }
    );
    // this.articleToUpdate = this.service.getArticle(this.id).subscribe(
    // response => {
    // //console.log(response);
    // this.label = response["label"];
    // this.price = response["price"];
    // this.picture = response["picture"];
   
    // }
    // );
   
}
}
