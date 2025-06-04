import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCategories } from './store/actions/portal.actions';
import { Observable } from 'rxjs';
import { selectLoading } from './store/reducers/core.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'portal-noticia';

  isLoading$: Observable<boolean>;
  
  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectLoading);
    
    this.store.dispatch(loadCategories());
  }
  
}
