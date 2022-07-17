import { Component, DoCheck } from '@angular/core';
import { LocalService } from 'src/app/local.service';
import { Todo } from 'src/app/models/models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements DoCheck {
  todos: Todo[] = [];

  constructor(private localStore: LocalService) {}

  // Get Todos from Local Storage
  getTodos() {
    this.todos = JSON.parse(this.localStore.getData('todos') || '{}');
  }

  // Delete Todo
  deleteTodo(id: string) {
    const filteredTodos = this.todos?.filter((todo: Todo) => {
      return todo.id !== id;
    });
    this.localStore.saveData('todos', JSON.stringify(filteredTodos));
  }

  // Complete Todo
  completeTodo(id: string) {
    const updatedTodos = this.todos.map((el: any) => {
      if (el.id === id) {
        return { ...el, isCompleted: !el.isCompleted };
      }
      return el;
    });
    this.localStore.saveData('todos', JSON.stringify(updatedTodos));
  }

  ngDoCheck(): void {
    this.getTodos();
  }
}
