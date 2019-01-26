import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    TodosComponent,
    TodosItemComponent,
    AddTodoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
