import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../services/question.service";
import {Question} from "../../shared/models/Question";
import {AnswerService} from "../services/answer.service";
import {Answer} from "../../shared/models/Answer";

@Component({
  selector: 'app-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.css']
})
export class QuestionsDetailsComponent implements OnInit {
  id!: number;
  question!: Question;
  answers!: Answer[];
  answer: Answer = {doctor: {}, question: {}} as Answer;
  comment!: string;
  confirmButton = "Add Comment";
  idAnswerToEdit!: number;
  currentUser!: number;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService, private answerService: AnswerService) {
  }

  ngOnInit(): void {
    this.currentUser = 1;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.questionService.getQuestion(this.id).subscribe(data => {
      this.question = data

    })
    this.getAnswers();
  }

  getAnswers() {
    this.answerService.getByQuestion(this.id).subscribe(data => {
      this.answers = data
      console.log(data);
    })
  }

  confirm() {
    this.answer.date = new Date();
    this.answer.doctor.id = 1;
    this.answer.question.id = this.id;
    this.answer.description = this.comment;
    if (this.confirmButton == "Add Comment") {
      this.answerService.add(this.answer).subscribe(data => {
          this.getAnswers();
          this.comment="";
          console.log(data);
        }
      );
    } else {
      this.answer.id = this.idAnswerToEdit;
      this.answerService.update(this.answer).subscribe(data => {
          this.getAnswers();
          console.log(data);
          this.comment = "";
          this.confirmButton = "Add Comment";
        }
      );
    }
  }

  delete(answer: Answer) {
    this.answerService.delete(answer.id).subscribe(data => {
      this.getAnswers();
      console.log(data);
    });
  }

  edit(answer: Answer) {
    this.confirmButton = "Update Comment";
    this.comment = answer.description;
    this.idAnswerToEdit = answer.id;
  }

  isDoctor() {
    return true;
  }
}
