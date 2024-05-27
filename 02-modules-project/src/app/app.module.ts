import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
