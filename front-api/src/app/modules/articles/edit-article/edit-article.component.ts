import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article:any;
  id:number=4;
  
  WAIT_FOR_REFRESH=300;
  
  constructor(private service:ArticlesService,private route: ActivatedRoute,private router:Router) {
   }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      params=>this.id=+params["id"]
    );
    console.log(this.id)
    this.service.getArticleById(this.id).subscribe(
      (data)=>{
        this.article=data;
      },error=>console.log(error)
    )
    console.log(this.article)
  }
  save():void
  {
    this.service.insertArticle(this.article).subscribe(

    );
    
   setTimeout(()=>{this.router.navigate(["/article/manage"])},this.WAIT_FOR_REFRESH) ;
  }

}
