import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/interface/inter-face';
import { TodoApiService } from 'src/app/service/todo-api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todo: Todo[];

  constructor( private getTodoData: TodoApiService) { }

  ngOnInit() {
    this.getTodoData.getTodoDate().subscribe( data => {
      this.todo = [...data];
    });
  }
  deleteTodo(todo: Todo): void{
    this.todo = this.todo.filter(d => d.id !== todo.id);
    this.getTodoData.onDeleteTodo(todo).subscribe();
  }
  onAddNewTodo(title): void{
    this.getTodoData.AddNewTodo(title).subscribe( result => {
      this.todo = [result, ...this.todo];
    });
  }
}
