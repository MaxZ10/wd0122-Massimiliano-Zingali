import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsPage } from './pages/accounts/accounts.page';
import { HomePage } from './pages/home/home.page';
import { UsersPage } from './pages/users/users.page';

const routes: Routes = [
  {
    path:'accounts',
    component: AccountsPage
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path:'users',
    component: UsersPage
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
