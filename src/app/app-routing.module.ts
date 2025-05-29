import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { ContainerNewsComponent } from './features/news/containers/container-news.component';
import { AuthComponent } from './features/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'news',
        component: ContainerNewsComponent,
        data: {
            breadcrumb: 'news'
        }
      }
    ]
  }, 
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
