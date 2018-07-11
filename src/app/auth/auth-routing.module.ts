import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninFbComponent } from './signin-fb/signin-fb.component';

const routes: Routes = [
  {
    path:'signin-fb', component:SigninFbComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
