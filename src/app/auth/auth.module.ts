import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninFbComponent } from './signin-fb/signin-fb.component';

import { SocialLoginModule, AuthServiceConfig, AuthService } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";


let config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1898655613711574")
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [SigninFbComponent],
  providers:[
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    AuthService
  ]
})
export class AuthModule { }
