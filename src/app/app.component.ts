import { Component } from '@angular/core';
import { LocalService } from './local.service';
import { Todo } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Todo List';
  task: string = '';

  todos: Todo[] = [];

  constructor(private localStore: LocalService) {}

  handleTaskSubmit() {
    if (this.task.trim() === '') return;
    this.todos.push({
      id: new Date().getUTCMilliseconds().toString(),
      task: this.task,
      isCompleted: false,
    });
    this.localStore.saveData('todos', JSON.stringify(this.todos));
    this.task = '';
  }
}
