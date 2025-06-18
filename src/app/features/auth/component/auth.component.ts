import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../../models/login.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  @Output() loginEvent = new EventEmitter();

  form: FormGroup;

  hide = signal(true);

  constructor(
    private fb: FormBuilder) {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login () {

    if (this.form.valid) {

      let data: Login = {
        login: this.form.get('login').value,
        password: this.form.get('password').value,
      }

      this.loginEvent.emit(data);
    }

  }
}
