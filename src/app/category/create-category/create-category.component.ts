import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Question} from "../../model/question";
import {Category} from "../../model/category";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });


  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  addCategory() {
    const category: Category = {
      id: 0,
      name: this.categoryForm.value.name
    };
    this.categoryService.createCategory(category).subscribe(() => {
      alert('success');
      this.categoryForm.reset();
    }, () => {
    });
  }


}
