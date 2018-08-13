import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RepositoryComponent } from './repository/repository.component';
import { LoginComponent } from './login/login.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PostPageComponent } from './post-page/post-page.component';
import { DashboardComponent } from './repository/dashboard/dashboard.component';
import { NewComponent } from './repository/new/new.component';
import { QuestionPaperComponent } from './repository/question-paper/question-paper.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsContainerComponent,
    RepositoryComponent,
    LoginComponent,
    PageNotFoundComponent,
    PostPageComponent,
    DashboardComponent,
    NewComponent,
    QuestionPaperComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,AngularFireModule.initializeApp( environment.firebase)
    ,AngularFirestoreModule
    ,AngularFireDatabaseModule 
    ,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
