import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoService } from './services/todo.service';
import  { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    clarity
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
