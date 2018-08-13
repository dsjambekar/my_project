import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsContainerComponent } from "./posts-container/posts-container.component";
import { RepositoryComponent } from "./repository/repository.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PostPageComponent } from './post-page/post-page.component';
import { DashboardComponent } from './repository/dashboard/dashboard.component';
import { NewComponent } from './repository/new/new.component';
import { QuestionPaperComponent } from './repository/question-paper/question-paper.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'posts',
    children: [
      {path: '', component: PostsContainerComponent},
      {path: ':slug', component: PostPageComponent}
    ]
  }
  ,{ path: 'blog', component: PostsContainerComponent }
  ,{ path: 'home', component: HomeComponent }
    ,{ path: 'repo', 
        component: RepositoryComponent,
        children:[
          {path: 'dashboard', component: DashboardComponent}
          ,{path: 'new', 
          children: [
            {path: '', component: NewComponent},
            {path: ':slug', component: NewComponent}
          ]}
          ,{path: 'questionPaper', component: QuestionPaperComponent}
        ]

    }
    ,{ path: '',   redirectTo: '/home', pathMatch: 'full' }
    ,{ path: '**', component: PageNotFoundComponent }
    
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

