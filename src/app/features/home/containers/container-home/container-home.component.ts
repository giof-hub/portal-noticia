import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadTest } from '../../../../store/actions/portal.actions';
import { selectTeste } from '../../../../store/reducers/portal.reducer';

@Component({
  selector: 'app-container-home',
  templateUrl: './container-home.component.html',
  styleUrl: './container-home.component.scss'
})
export class ContainerHomeComponent implements OnInit{

  constructor (
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadTest({id: 1}));


    var t = this.store.pipe(select(selectTeste));
  }
}
