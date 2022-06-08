import { Todo } from './../../../models/todo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(): void{
    console.log(this.todo)
  }

  markAsDone():void{
    console.log(this.todo)
  }
}
