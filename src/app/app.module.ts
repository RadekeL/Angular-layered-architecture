import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddTasksComponent } from '../todo-app/add-tasks/add-tasks.component';
import { CompletedTasksComponent } from '../todo-app/completed-tasks/completed-tasks.component';
import { TodoTasksComponent } from '../todo-app/todo-tasks/todo-tasks.component';
import { TasksApiService } from '../todo-app/tasks-api.service';
import { TasksListComponent } from '../todo-app/tasks-list/tasks-list.component';
import { TasksStateComponent } from '../todo-app/tasks-state.component';
import { TasksComponent } from '../todo-app/tasks/tasks.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AddTasksComponent,
    CompletedTasksComponent,
    TodoTasksComponent,
    TasksListComponent,
    TasksComponent
  ],
  providers: [TasksStateComponent, TasksApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
