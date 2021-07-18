import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces/task.interface';

type TasksState = {
  tasks: Task[];
};

@Injectable()
export class TasksStateComponent implements OnInit {
  private initState: TasksState = {
    tasks: []
  };

  private _state$ = new BehaviorSubject<TasksState>(this.initState);

  constructor() {}

  ngOnInit() {}

  // * Actions
  public setTasks(tasks: Task[]) {
    this._state$.next({ ...this._state$.value, tasks });
  }

  // * Selectors

  // public get tasks$() {
  //   return
  // }
}
