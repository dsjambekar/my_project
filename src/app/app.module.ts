import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { StorageServiceModule} from 'angular-webstorage-service';
import { NgxEditorModule } from 'ngx-editor';
import { QuillModule } from 'ngx-quill';
import { AuthService } from './shared/auth.service';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,

} from 'angular-6-social-login';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './shared/auth-guard.service';
import { TestComponent } from './test/test.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { ChildTestComponent } from './child-test/child-test.component';
import { RepoComponent } from './repo/repo.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { QuestionComponent } from './question/question.component';



// Configs
// export function getAuthServiceConfigs() {
//   let config = new AuthServiceConfig(
//       [

//         {
//           id: GoogleLoginProvider.PROVIDER_ID,
//           provider: new GoogleLoginProvider("559209906236-9g1a12rompmqdspd5ngrg88cppv4ceov.apps.googleusercontent.com")
//         }
//       ]);
//   return config;
// }

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
    QuestionComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , AngularFireModule.initializeApp( environment.firebase)
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
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
