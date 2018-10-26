import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment.prod';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { NgxEditorModule } from 'ngx-editor';
import { QuillModule } from 'ngx-quill';
import { AuthService } from './shared/auth.service';


import {
  SocialLoginModule,

} from 'angular-6-social-login';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { ChildTestComponent } from './child-test/child-test.component';
import { RepoComponent } from './repo/repo.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { QuestionComponent } from './question/question.component';
import { ViewQuestionComponent } from './view-question/view-question.component';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    SigninComponent,
    ContactComponent,
    TestComponent,
    QuestionDetailsComponent,
    QuestionsListComponent,
    ChildTestComponent,
    RepoComponent,
    NewQuestionComponent,
    EditQuestionComponent,
    QuestionComponent,
    ViewQuestionComponent,
    LikeComponent,
  ],

  imports: [
    BrowserModule
    , AppRoutingModule
    , AngularFireModule.initializeApp(environment.firebase)
    , AngularFirestoreModule
    , AngularFireDatabaseModule
    , FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
    , SocialLoginModule
    , StorageServiceModule
    , AngularFireAuthModule
    , FormsModule
    , ReactiveFormsModule
    , NgxEditorModule
    , QuillModule
    , HttpClientModule
    , HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareButtonsModule.forRoot()
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
