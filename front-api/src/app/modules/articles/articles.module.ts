import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng-lts/inputtext';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import {InputTextareaModule} from 'primeng-lts/inputtextarea';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleRouterComponent } from './article-router/article-router.component';
import { FormsModule } from '@angular/forms';
import { ViewArticleComponent } from './view-article/view-article.component';
import {ButtonModule} from 'primeng-lts/button';
import { AddArticleComponent } from './add-article/add-article.component';




@NgModule({
  declarations: [
    ListArticlesComponent,
    ManageArticlesComponent,
    EditArticleComponent,
    ArticleRouterComponent,
    ViewArticleComponent,
    AddArticleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InputTextModule,
    InputTextareaModule,
    ArticlesRoutingModule,
    FormsModule,
    ButtonModule
  ],
  exports:[
    
    ArticleRouterComponent
  ]
})
export class ArticlesModule { }
