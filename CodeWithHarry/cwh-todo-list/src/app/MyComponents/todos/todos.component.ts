import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor() {
    if (localStorage.myTodos) {
      this.todos = JSON.parse(localStorage.myTodos);
    }
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    if (localStorage.myTodos) {
      const index = this.todos.indexOf(todo);
      if (index > -1) {
        this.todos.splice(index, 1);
        localStorage.myTodos = JSON.stringify(this.todos);
      }
    }
  }

  addTodo(todo: Todo) {
    if (localStorage.myTodos) {
      this.todos = JSON.parse(localStorage.myTodos);
    }
    this.todos.push(todo);
    localStorage.myTodos = JSON.stringify(this.todos);
  }

  toggleTodo(todo: Todo) {
    if (localStorage.myTodos) {
      const index = this.todos.indexOf(todo);
      if (index > -1) {
        this.todos[index].active = !this.todos[index].active;
        localStorage.myTodos = JSON.stringify(this.todos);
      }
    }
  }
}
