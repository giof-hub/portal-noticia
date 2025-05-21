import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
        path: 'features',
        loadChildren: () => import('./features/features-routing.module').then(
            (m) => m.FeaturesRoutingModule
        ),
        data: {
            breadcrumb: 'Home'
        }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
