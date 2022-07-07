import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPage } from './pages/users/users.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { CompletedPage } from './pages/completed/completed.page';

@NgModule({
  declarations: [
    AppComponent,
    UsersPage,
    NotFoundPage,
    CompletedPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
