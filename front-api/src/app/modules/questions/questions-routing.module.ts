import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsListComponent} from "./questions-list/questions-list.component";
import {QuestionService} from "./services/question.service";
import {AddQuestionComponent} from "./add-question/add-question.component";
import {UpdateQuestionComponent} from "./update-question/update-question.component";
import {QuestionsDetailsComponent} from "./questions-details/questions-details.component";
import {AnswerService} from "./services/answer.service";

const routes: Routes = [
  {path: '', component: QuestionsListComponent},
  {path: 'add', component: AddQuestionComponent},
  {path: 'update/:id', component: UpdateQuestionComponent},
  {path: 'check-details/:id', component: QuestionsDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [QuestionService, AnswerService]
})
export class QuestionsRoutingModule { }
