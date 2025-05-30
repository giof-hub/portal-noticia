import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../../models/login.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  @Output() loginEvent = new EventEmitter();

  email = new FormControl('', [Validators.required, Validators.email]);

  form: FormGroup;

  hide = signal(true);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.required],
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
        email: this.form.get('email').value,
        password: this.form.get('password').value,
      }

      this.loginEvent.emit({data});
    }

  }
}
