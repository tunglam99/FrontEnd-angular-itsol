import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./helper/jwt-interceptor";
import {UserService} from "./service/user.service";
import {QuestionService} from "./service/question.service";
import {CategoryService} from "./service/category.service";
import {HomeComponent} from "./home/home.component";
import {ListQuestionComponent} from "./question/list-question/list-question.component";
import {CreateQuestionComponent} from "./question/create-question/create-question.component";
import {UpdateQuestionComponent} from "./question/update-question/update-question.component";
import {DeleteQuestionComponent} from "./question/delete-question/delete-question.component";
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListQuestionComponent,
    CreateQuestionComponent,
    UpdateQuestionComponent,
    DeleteQuestionComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    DeleteCategoryComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},UserService,QuestionService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
