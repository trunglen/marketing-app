import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'visitor', loadChildren: './visitor/visitor.module#VisitorModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
