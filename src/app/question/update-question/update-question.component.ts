import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Question} from "../../model/question";
import {Category} from "../../model/category";
import {Subscription} from "rxjs";
import {QuestionService} from "../../service/question.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  questionForm: FormGroup = new FormGroup({
    content: new FormControl(''),
    category: new FormControl('')
});
currentQuestion: Question;
categoryList: Category[] = [];
sub: Subscription;

constructor(private questionService: QuestionService,
  private activatedRoute: ActivatedRoute,
  private categoryService: CategoryService) {
}

ngOnInit() {
  this.getCategories();
}

  updateQuestion() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.questionService.getQuestion(id).subscribe(result => {
        this.currentQuestion = result;
        const question: Question = {
          id: 0,
          content: this.questionForm.value.content,
          category: {
            id: this.questionForm.value.category
          }
        };
        this.questionService.updateQuestion(id, question).subscribe(() => {
          alert('success');
          this.questionForm.reset();
        }, () => {
        });
      });
    });
  }


getCategories() {
  this.categoryService.listCategory().subscribe((result) => {
    this.categoryList = result;
  });
}

}
