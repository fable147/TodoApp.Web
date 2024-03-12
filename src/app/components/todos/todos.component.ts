import { Component, OnInit } from '@angular/core';
import { EmergencyLevel, Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { Guid } from 'guid-typescript';
import { ChangeDetectorRef } from '@angular/core' ;

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  public submitted: boolean = false;
  public TodoDialog:boolean = false;
  public todos:Todo[] = [];
  public showForm:boolean = false;
  public levels!: EmergencyLevel[];
  public selectedLevel !: EmergencyLevel;
  newTodo : Todo = {
    Id:"",
  Description:"",
  Title : "",
  CreatedDate: new Date(),
  UpdatedDate : new Date(),
  EmergencyLevel :  this.selectedLevel,
  Category: "",
  IsCompleted : false,
  ComplatedDate : new Date(),

};

  constructor(private todoService:TodoService,private cdr:ChangeDetectorRef) {
  }
  ngOnInit(): void {
  this.getAllTodos();
   this.levels = [
     {level:"High",code:1},
     {level:"Mid",code:2},
     {level:"Level",code:3}
    ]
    console.log(this.levels);

   
  }
  public getAllTodos()
  {
    this.todoService.getAllTodos().subscribe(
      (data: Todo[]) => {
          this.todos = data; // Assign data to todos array
          console.log(data,this.todos.length);
          this.cdr.detectChanges();
      },
      (error) => {
          console.error('Error fetching todos:', error);
      }
      
  );

  }
  public addTodo()
  {
     console.log(this.newTodo);
     this.newTodo.Id = Guid.create().toString();
     this.todoService.addTodo(this.newTodo).subscribe({
      next:(todo)=>{
        this.getAllTodos();
      }
     })

  }
  public editTodo(todo:Todo)
  {

  }
  public deleteTodo(todo:Todo)
  {

  }
  public hideDialog()
  {
    this.showForm = false;
    this.submitted = false;
  }
  public saveProduct()
  {

  }
  public showNew()
  {
    this.showForm = true;
  }
  



}
