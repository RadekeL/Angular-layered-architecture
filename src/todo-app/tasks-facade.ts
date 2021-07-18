import { Injectable } from '@angular/core';
import { TasksApiService } from './tasks-api.service';
import { TasksStateComponent } from './tasks-state.component';

@Injectable()
export class TasksFacade {
  tasks$ = this.taskState.tasks$;

  constructor(
    private readonly taskService: TasksApiService,
    private readonly taskState: TasksStateComponent
    ) {}

  addTask() {}

  editTask() {}

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.taskState.setTasks(tasks);
    });
    
  }

  completeTask() {}

  todoTask() {}
}
