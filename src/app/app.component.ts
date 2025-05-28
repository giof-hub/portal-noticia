import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCategories } from './store/actions/portal.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portal-noticia';
  
  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
  }
  
}
