import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { TokenService } from 'src/app/token.service';
import { ArticlesService } from '../services/articles.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  articles:any[]=[];
  keyword:string="";
  currentUser:any={
    "id":2,
    speciality:"psychiatrie"
  }
  categories:string[]=["Nutrition","Psycho et Sexualité","Grossesse et accouchement","Santé","Beauté et Bien-être"]
  constructor(private service:ArticlesService,private userService:UserService, private tokenService:TokenService,private routingService:RoutingService) {
    this.currentUser.id = this.tokenService.getUser()?.id;
  }

  ngOnInit(): void {
    this.getAll();
    this.routingService.setCommunActiveRouteTo("Articles")
  }
  getAll():void
  {
    this.service.getArticleList().subscribe(
      (data)=>{
        console.log(data);
        this.articles=data;
      },error=>console.log(error)
    );
  }

search():void
{
  if(this.keyword=="")
    this.getAll();
  else
  this.service.getArticlesByKeyword(this.keyword).subscribe(
    (data)=>this.articles=data
  );
}
updateKeyword(keyword:string)
{
  this.keyword=keyword;
  this.search()
}
isDoctor():boolean
{
  return this.userService.isDoctor(this.currentUser);
}
}
