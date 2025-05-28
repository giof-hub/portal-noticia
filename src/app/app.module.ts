import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxLoadingModule } from 'ngx-loading';
import { TemplateComponent } from './components/template/template.component';
import { CoreModule } from './core/core.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import * as fromPortal from './store/reducers/portal.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PortalEffects } from './store/effects/portal.effects';
import { HttpClientModule } from '@angular/common/http';
import { ContainerNewsComponent } from './features/news/containers/container-news.component';
import { NewsComponent } from './features/news/components/news.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ContainerNewsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatToolbarModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    NgxLoadingModule.forRoot({}),
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
    StoreModule.forFeature(fromPortal.portalFeatureKey, fromPortal.reducer),
    EffectsModule.forFeature([PortalEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
