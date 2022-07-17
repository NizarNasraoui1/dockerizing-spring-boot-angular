import {Component, OnInit} from '@angular/core';
import {Question} from "../../shared/models/Question";
import {QuestionService} from "../services/question.service";
import {Router} from "@angular/router";
import { RoutingService } from 'src/app/routing.service';
import { TokenService } from 'src/app/token.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  constructor(private questionService : QuestionService,
    private routingService:RoutingService,
    private tokenService:TokenService,
    private router: Router) { 
      this.routingService.setCommunActiveRouteTo("Question")
    }
  questions !: Question[];
  id : number =1;

  ngOnInit(): void {
    this.tokenService.redirectIfNotSignedIn();
    this.listOfQuestion();
  }

  listOfQuestion(){

    this.questionService.getQuestions().subscribe(data=>{
      this.questions=data;
      console.log(data)
    })
  }

  delete(id: number) {
    this.questionService.deleteQuestion(id).subscribe(data=>{
      console.log(data)
      if(data){
        this.listOfQuestion()
      }
    })
  }

  public update(id: number) {
    this.router.navigate(['questions/update', id]);
  }

  add() {
    this.router.navigate(['questions/add']);
  }

  checkDetails(id: number) {
    this.router.navigate(['questions/check-details', id])
  }
}
