import { Injectable } from '@angular/core';
import { TasksApiService } from './tasks-api.service';

@Injectable()
export class TasksFacade {
  constructor(private readonly taskService: TasksApiService) {}

  addTask() {}

  editTask() {}

  loadTasks() {
    console.log('LOAD');
    this.taskService.getTasks().subscribe(v => console.log(v[1]));
  }

  completeTask() {}

  todoTask() {}
}
