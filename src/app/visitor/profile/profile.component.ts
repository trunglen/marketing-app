import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { storage_key } from '../../common/constant';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  user: SocialUser
  constructor(
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem(storage_key.user_profile))
    console.log(this.user)
  }

}
