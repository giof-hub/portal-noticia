import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxLoadingModule } from 'ngx-loading';
import { TemplateComponent } from './components/template/template.component';
import { CoreModule } from './core/core.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { StoreModule } from '@ngrx/store';
import * as fromPortal from './store/reducers/portal.reducer';
import * as fromCore from './store/reducers/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PortalEffects } from './store/effects/portal.effects';
import { HttpClientModule } from '@angular/common/http';
import { ContainerNewsComponent } from './features/news/containers/container-news.component';
import { NewsComponent } from './features/news/components/news.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthComponent } from './features/auth/component/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContainerAuthComponent } from './features/auth/container/container-auth.component';
import { AnnounceComponent } from './features/announce/component/announce.component';
import { ContainerAnnounceComponent } from './features/announce/container/container-announce.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NodeMenuComponent } from './components/shared/node-menu/node-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ContainerNewsComponent,
    NewsComponent,
    AuthComponent,
    ContainerAuthComponent,
    AnnounceComponent,
    ContainerAnnounceComponent,
    NodeMenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatToolbarModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    NgxLoadingModule.forRoot({}),
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
    StoreModule.forFeature(fromPortal.portalFeatureKey, fromPortal.reducer),
    StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducer),
    EffectsModule.forFeature([PortalEffects])
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
