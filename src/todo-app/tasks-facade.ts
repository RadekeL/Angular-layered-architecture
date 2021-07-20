import { Injectable } from '@angular/core';
import { TasksApiService } from './tasks-api.service';
import { TasksStateComponent } from './tasks-state.component';

@Injectable()
export class TasksFacade {
  completedTasks$ = this.taskState.completedTasks$;
  todoTasks$ = this.taskState.todoTasks$;

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

  deleteTask(taskId: number) {
    this.taskState.deleteTask(taskId);
  }
}
