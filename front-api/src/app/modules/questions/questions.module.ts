import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionsRoutingModule} from './questions-routing.module';
import {QuestionsComponent} from './questions.component';
import {QuestionsListComponent} from './questions-list/questions-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AddQuestionComponent} from './add-question/add-question.component';
import {FormsModule} from "@angular/forms";
import {UpdateQuestionComponent} from './update-question/update-question.component';
import {QuestionsDetailsComponent} from './questions-details/questions-details.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsListComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    QuestionsDetailsComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[]
})
export class QuestionsModule { }
