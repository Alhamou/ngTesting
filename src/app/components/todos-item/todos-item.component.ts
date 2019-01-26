import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interface/inter-face';
import { TodoApiService } from 'src/app/service/todo-api.service';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {


  @Input() todo: Todo[];
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor( private getTodoData: TodoApiService ) { }

  newData: any = this.getTodoData.getTodoDate();

  ngOnInit() {
  }

  onchangeCompleted (todo) {
    todo.completed = !todo.completed
    this.getTodoData.changeCompleted(todo).subscribe( res => {
    });
  }
  deleteItem (todo) {
    this.deleteTodo.emit(todo);
  }
}
