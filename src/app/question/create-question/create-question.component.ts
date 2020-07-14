import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {QuestionService} from "../../service/question.service";
import {CategoryService} from "../../service/category.service";
import {Question} from "../../model/question";

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  questionForm: FormGroup = new FormGroup({
    content: new FormControl(''),
    category: new FormControl('')
});
categoryList: Category[] = [];

constructor(private questionService: QuestionService,
  private categoryService: CategoryService) {
}

ngOnInit() {
  this.getCategories();
}

  addQuestion() {
    const question: Question = {
      id: 0,
      content: this.questionForm.value.content,
      category: {
        id: this.questionForm.value.category
      }
    };
    this.questionService.createQuestion(question).subscribe(() => {
      alert('success');
      this.questionForm.reset();
    }, () => {
    });
  }

getCategories() {
  this.categoryService.listCategory().subscribe((result) => {
    this.categoryList = result;
  });
}
}
