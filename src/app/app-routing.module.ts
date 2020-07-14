import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ListQuestionComponent} from "./question/list-question/list-question.component";
import {CreateQuestionComponent} from "./question/create-question/create-question.component";
import {UpdateQuestionComponent} from "./question/update-question/update-question.component";
import {DeleteQuestionComponent} from "./question/delete-question/delete-question.component";
import {HomeComponent} from "./home/home.component";
import {ListCategoryComponent} from "./category/list-category/list-category.component";
import {CreateCategoryComponent} from "./category/create-category/create-category.component";
import {UpdateCategoryComponent} from "./category/update-category/update-category.component";
import {DeleteCategoryComponent} from "./category/delete-category/delete-category.component";


const routes: Routes = [{
  path :'',
  component: HomeComponent
},
  {
    path :'login',
    component: LoginComponent
  },
  {
    path :'list-question',
    component: ListQuestionComponent
  },
  {
    path :'create-question',
    component: CreateQuestionComponent
  },
  {
    path :'update-question/:id',
    component: UpdateQuestionComponent
  },
  {
    path :'delete-question/:id',
    component: DeleteQuestionComponent
  },
  {
    path :'list-category',
    component: ListCategoryComponent
  },
  {
    path :'create-category',
    component: CreateCategoryComponent
  },
  {
    path :'update-category/:id',
    component: UpdateCategoryComponent
  },
  {
    path :'delete-category/:id',
    component: DeleteCategoryComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
