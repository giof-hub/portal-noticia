import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadLogin } from '../../../store/actions/portal.actions';
import { Login } from '../../../models/login.model';

@Component({
  selector: 'app-container-auth',
  templateUrl: './container-auth.component.html',
  styleUrl: './container-auth.component.scss'
})
export class ContainerAuthComponent {


  constructor(
    private store: Store
  ) {}

  login(data: Login) {
    this.store.dispatch(loadLogin({data}));
  }
}
