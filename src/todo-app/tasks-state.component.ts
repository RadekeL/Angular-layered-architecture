import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject,  mergeMap, pluck } from 'rxjs';
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

  private _stateAsObservable = this._state$.asObservable();

  constructor() {}

  ngOnInit() {}

  // * Actions
  public setTasks(tasks: Task[]) {
    this._state$.next({ ...this._state$.value, tasks });
  }

  // * Selectors

  public get tasks$() {
    return this._stateAsObservable.pipe(pluck('tasks'));
  }

  // public get completedTasks$() {
  //   return this.tasks$.pipe(
  //     mergeMap(tasks => tasks),
  //   )
  // }
}
