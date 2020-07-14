import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Question} from "../../model/question";
import {Category} from "../../model/category";
import {Subscription} from "rxjs";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });

  currentCategory: Category;
  sub: Subscription;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  updateCategory() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.categoryService.getCategory(id).subscribe(result => {
        this.currentCategory = result;
        const category: Category = {
          id: 0,
          name: this.categoryForm.value.name
        };
        this.categoryService.updateCategory(id, category).subscribe(() => {
          alert('success');
          this.categoryForm.reset();
        }, () => {
        });
      });
    });
  }

}
