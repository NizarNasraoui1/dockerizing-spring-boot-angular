import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/token.service';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-manage-articles',
  templateUrl: './manage-articles.component.html',
  styleUrls: ['./manage-articles.component.css']
})
export class ManageArticlesComponent implements OnInit {
  
  currentUser:any = {
    "id":1
  }
  keyword:string="";
  articles:any[]=[];
  constructor(private service:ArticlesService, private tokenService:TokenService) {
    this.currentUser.id = this.tokenService.getUser()?.id;
  }

  ngOnInit(): void {
    this.reloadData();
  }

  getAll():void{
    this.service.getArticlesByUserId(this.currentUser.id).subscribe(
      (data)=>{
        console.log("User ",this.currentUser.id,"Has these",data);
        this.articles = data;
      },error=>console.log(error)
    );
  }


  reloadData():void{
    if(this.keyword=="")
      this.getAll();
    else
      this.search();
  }
  edit(id:number):void
  {
    console.log(id);
  }
  delete(id:number):void{
    console.log("tried to delete",id)
    this.service.deleteById(id).subscribe(
      (data)=>{console.log(data)
        this.reloadData();}
    )
    
  }
  search()
  {
    this.service.getArticlesbyDoctorByKeyword(this.currentUser.id,this.keyword).subscribe(
      (data)=>this.articles=data
    )
  }
}
