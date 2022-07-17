import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { ViewArticleComponent } from './view-article/view-article.component';

const routes: Routes = [{path:"",component:ListArticlesComponent},
{path:"manage",component:ManageArticlesComponent},
{path:"edit/:id",component:EditArticleComponent},
{path:"view/:id",component:ViewArticleComponent},
{path:"add",component:AddArticleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
