import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxLoadingModule } from 'ngx-loading';
import { TemplateComponent } from './components/template/template.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './features/home/components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerHomeComponent } from './features/home/containers/container-home/container-home.component';
import { StoreModule } from '@ngrx/store';
import * as fromPortal from './store/reducers/portal.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PortalEffects } from './store/effects/portal.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HomeComponent,
    ContainerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatToolbarModule,
    HttpClientModule,
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
