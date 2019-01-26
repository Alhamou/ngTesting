import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: any;
  @Output() addNewTodo : EventEmitter<any> = new EventEmitter();

 

  onSubmit(){
    const todo = {
      title: this.title,
      completed: false,
      userId: 4
    };
    this.addNewTodo.emit(todo);
  }
}
