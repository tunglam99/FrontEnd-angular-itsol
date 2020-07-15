import { Component, OnInit } from '@angular/core';
import {Question} from "../../model/question";
import {QuestionService} from "../../service/question.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  questionList: Question[] = [];
  questionStatusIsTrueList: Question[] = [];
  searchForm: FormGroup = new FormGroup({
    content: new FormControl(null)
  });

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

  findAllQuestionByContent(content: string) {
    this.questionService.findAllQuestionByContent(content).subscribe(value => {
      this.questionStatusIsTrueList = value;
    });
  }

  searchQuestion(content: string) {
    if (this.searchForm.value.content != null) {
      this.findAllQuestionByContent(content);
    }
    this.searchForm.reset();
  }
}
