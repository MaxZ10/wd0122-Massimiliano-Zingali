import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedPage } from './pages/completed/completed.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { UsersPage } from './pages/users/users.page';

const routes: Routes = [
  {
    path:'accounts',
    component: CompletedPage
  },

  {
    path:'users',
    component: UsersPage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts'
  },
  {
    path: '**',
    component: NotFoundPage
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
