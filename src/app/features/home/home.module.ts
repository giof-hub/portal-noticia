import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerHomeComponent } from './containers/container-home/container-home.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    ContainerHomeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
