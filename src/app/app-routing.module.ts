import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { ContainerHomeComponent } from './features/home/containers/container-home/container-home.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'home',
        component: ContainerHomeComponent,
        data: {
            breadcrumb: 'Home'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
