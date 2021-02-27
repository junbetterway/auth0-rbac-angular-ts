import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AdminAccountComponent } from './components/admin-account/admin-account.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './components/my-account/my-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'myaccount', component: MyAccountComponent },
  { path: 'adminaccount', component: AdminAccountComponent },
  { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
