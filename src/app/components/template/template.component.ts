import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { select, Store } from '@ngrx/store';
import { selectCategories } from '../../store/reducers/portal.reducer';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent implements OnInit {
  $categories: Observable<Menu[]>;

  isLogged: boolean = false;

  constructor (
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.$categories = this.store.pipe(select(selectCategories));

    this.isLogged = this.authService.isAuthenticated();
  }

  logout() {
    localStorage.removeItem('token');

    this.router.navigate(['news']);
  }
}
''