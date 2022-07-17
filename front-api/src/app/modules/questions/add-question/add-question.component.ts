import { Component, OnInit } from '@angular/core';
import {Question} from "../../shared/models/Question";
import {QuestionService} from "../services/question.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  question  ={} as Question;


  constructor(private questionService: QuestionService,
              private router: Router) {
  }

  ngOnInit(): void {


  }

  add() {
    let id=1;
    this.question.date=new Date();
    this.questionService.addQuestion(this.question,id).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/questions']);
    });

  }
}
