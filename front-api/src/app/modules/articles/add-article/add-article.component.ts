import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/token.service';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  article:any={
    "title":"",
    "description":""
      };
      currentUser:any={
        "id":1
      };
      WAIT_FOR_REFRESH=300;
  constructor(private service:ArticlesService,private router:Router, private tokenService:TokenService) {
    this.currentUser.id = this.tokenService.getUser()?.id;
   }

  ngOnInit(): void {
    this.article.doctor=this.currentUser;
  }
  save():void
  {
    this.service.insertArticle(this.article).subscribe(

    );
    
   setTimeout(()=>{this.router.navigate(["/article/manage"])},this.WAIT_FOR_REFRESH) ;
  }

}
