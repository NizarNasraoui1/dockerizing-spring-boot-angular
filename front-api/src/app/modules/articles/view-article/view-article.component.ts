import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {
  article:any;
  id:number=0;
  constructor(private service:ArticlesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params=>this.id=+params['id']
    )

    this.service.getArticleById(this.id).subscribe(data=>this.article=data)
  }

}
