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
import { SigninComponent } from './signin/signin.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';


import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,

} from "angular-6-social-login";

// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [

        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("559209906236-nfn6k9mhe762ld96ubkit1tluvu6gj8r.apps.googleusercontent.com")
        }
      ]);
  return config;
}

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
    SigninComponent
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

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
