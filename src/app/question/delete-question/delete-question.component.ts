import { Component, OnInit } from '@angular/core';
import {Question} from "../../model/question";
import {Subscription} from "rxjs";
import {QuestionService} from "../../service/question.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  currentQuestion: Question;
  sub: Subscription;

  constructor(private questionService: QuestionService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.questionService.getQuestion(id).subscribe(result => {
        this.currentQuestion = result;
      });
    });
  }

  deleteQuestion() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.questionService.deleteQuestion(id).subscribe(() => {
        alert('success');
      });
    });
  }

}
