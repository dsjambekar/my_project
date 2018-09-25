import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './repository/dashboard/dashboard.component';
import { NewComponent } from './repository/new/new.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './shared/auth-guard.service';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent,
  children: [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent}
  , { path: 'new', component: NewComponent}
  , { path: 'test', component: TestComponent}
    ]}
    // ,{path: 'question', component: QuestionComponent}
    // ,{path: 'options', component: OptionsComponent}
    // ,{path: 'answer', component: AnswerComponent}


  , { path: 'contact',  canActivate: [AuthGuard], component: ContactComponent }
    , { path: '',   redirectTo: '/home', pathMatch: 'full' }
    , { path: '**', component: PageNotFoundComponent }

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
export class AppRoutingModule {}

