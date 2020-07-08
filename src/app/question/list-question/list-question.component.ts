import { Component, OnInit } from '@angular/core';
import {Question} from "../../model/question";
import {QuestionService} from "../../service/question.service";

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  questionList: Question[] = [];

  constructor(private questionService: QuestionService) {
  }

  ngOnInit() {
    this.getQuestionList();
  }

  getQuestionList() {
    this.questionService.listQuestion().subscribe(result => {
      this.questionList = result;
    });
  }

}
