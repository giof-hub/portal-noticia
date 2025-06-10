import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadLogin } from '../../../store/actions/portal.actions';
import { Login } from '../../../models/login.model';
import { selectLoginToken } from '../../../store/reducers/portal.reducer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { startLoad } from '../../../store/actions/core.actions';

@Component({
  selector: 'app-container-auth',
  templateUrl: './container-auth.component.html',
  styleUrl: './container-auth.component.scss'
})
export class ContainerAuthComponent implements OnInit{

  private token$: Observable<string>;

  constructor(
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.token$ = this.store.pipe(select(selectLoginToken));

    this.token$.subscribe((token) => {
      if (token) {
        localStorage.setItem('token', token);

        this.router.navigate(['/news']);
      }
    });

  }

  login(data: Login) {
    this.store.dispatch(startLoad());
    this.store.dispatch(loadLogin({data}));
  }
}
