import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AgentModule} from './features/agent/agent.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {AuthInterceptor} from './core/auth/interceptors/auth.interceptors';
import {DeleteConfirmationComponent} from './shared/delete-confirmation/delete-confirmation.component';
import {MaterialModule} from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DeleteConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
