import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { select, Store } from '@ngrx/store';
import { selectCategories } from '../../store/reducers/portal.reducer';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent implements OnInit {
  $categories: Observable<Category[]>;

  constructor (
    private store: Store
  ) {}

  ngOnInit(): void {
    this.$categories = this.store.pipe(select(selectCategories));
  }
}
