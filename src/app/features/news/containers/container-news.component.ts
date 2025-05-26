import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadCategories, loadTest } from '../../../store/actions/portal.actions';
import { selectCategories } from '../../../store/reducers/portal.reducer';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'container-app-news',
  templateUrl: './container-news.component.html',
  styleUrl: './container-news.component.scss'
})
export class ContainerNewsComponent implements OnInit{

  private $categories: Observable<Category[]>;

  constructor (
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadCategories());


    this.$categories = this.store.pipe(select(selectCategories));
  }
}
