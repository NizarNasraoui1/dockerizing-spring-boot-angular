import {Component, OnInit} from '@angular/core';
import {Question} from "../../shared/models/Question";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../services/question.service";

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  question  ={} as Question;
  id!:number;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private questionService: QuestionService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.questionService.getQuestion(this.id).subscribe(data => {
      this.question = data
    })
  }

  update() {
    this.questionService.updateQuestion(this.question).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/questions']);
    });
  }
}
