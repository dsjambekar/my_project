import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RepoComponent } from './repo/repo.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'repo', component: RepoComponent },
  { path: 'home/question-details/:key', component: QuestionDetailsComponent },
  { path: 'repo/question-details/:key', component: QuestionDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

