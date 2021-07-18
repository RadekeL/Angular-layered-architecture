import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksFacade } from '../tasks-facade';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks$ = this.facade.tasks$;

  constructor(private readonly facade: TasksFacade) {}

  ngOnInit() {
    console.log('facade');
    this.facade.loadTasks();

    this.tasks$.subscribe(v => console.log('TEST', v));
  }

  addTask() {}

  editTask() {}

  loadTasks() {}

  completeTask() {}

  todoTask() {}
}
