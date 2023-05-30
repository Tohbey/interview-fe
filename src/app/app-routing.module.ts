import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {SessionExpiredComponent} from "./session-expired/session-expired.component";

const routes: Routes = [
  {path:'login', pathMatch:'full', redirectTo:'login'},
  {path: '', component:LoginComponent},
  {path:'reset-password/:token/:email', component: ResetPasswordComponent},
  {path:'session-expired', component: SessionExpiredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
