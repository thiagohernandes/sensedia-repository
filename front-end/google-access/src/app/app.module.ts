import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from 'angular5-social-login';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { provideConfig } from './google.social';
import { HttpClientModule } from '@angular/common/http';
import { OAuthService } from './services/oauth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    { provide: AuthServiceConfig, useFactory: provideConfig },
    OAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
