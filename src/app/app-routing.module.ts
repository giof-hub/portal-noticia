import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { ContainerNewsComponent } from './features/news/containers/container-news.component';
import { ContainerAuthComponent } from './features/auth/container/container-auth.component';
import { AuthGuard } from './core/service/auth-guard.service';
import { ContainerAnnounceComponent } from './features/announce/container/container-announce.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: TemplateComponent,
    children: [
      {
        path: '',
        component: ContainerNewsComponent,
        data: {
            breadcrumb: 'news'
        }
      },
      {
        path: 'announce',
        component: ContainerAnnounceComponent,
        data: {
            breadcrumb: 'announce'
        },
        canActivate: [AuthGuard]
      }
    ]
  }, 
  {
    path: 'login',
    component: ContainerAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
