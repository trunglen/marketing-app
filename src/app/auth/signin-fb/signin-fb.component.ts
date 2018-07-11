import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { storage_key } from '../../common/constant';

@Component({
  selector: 'app-signin-fb',
  templateUrl: './signin-fb.component.html',
  styleUrls: ['./signin-fb.component.css']
})
export class SigninFbComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe(res => {
      sessionStorage.setItem(storage_key.user_profile, JSON.stringify(res))
    })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate(['/visitor/profile'])
  }
}
