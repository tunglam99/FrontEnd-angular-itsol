import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {Subscription} from "rxjs";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  currentCategory: Category;
  sub: Subscription;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.categoryService.getCategory(id).subscribe(result => {
        this.currentCategory = result;
      });
    });
  }
  deleteCategory() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.categoryService.deleteCategory(id).subscribe(() => {
        alert('success');
      });
    });
  }

}
