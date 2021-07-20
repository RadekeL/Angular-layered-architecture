import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, mergeMap, pluck } from 'rxjs';
import { filter, first, map, tap, toArray } from 'rxjs/operators';
import { USER_ID } from '../consts';
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

  private _stateAsObservable$ = this._state$.asObservable();

  constructor() {}

  ngOnInit() {}

  // * Actions
  public setTasks(tasks: Task[]) {
    this._state$.next({ ...this._state$.value, tasks });
  }

  // TODO - użyj gotowego selectora
  public deleteTask(taskId: number) {
    return this.tasks$
      .pipe(
        first(),
        map((tasks: Task[]) => tasks.filter(task => task.id !== taskId))
      )
      .subscribe(tasks => this.setTasks(tasks));
  }

  // public addTask(task: Task) {
  //   this._state$.
  // }

  // ** Selectors

  public get tasks$() {
    return this._stateAsObservable$.pipe(
      pluck('tasks'),
      map((tasks: Task[]) => tasks.filter(task => task.userId === USER_ID))
    );
  }

  public get todoTasks$() {
    return this.tasks$.pipe(
      map((tasks: Task[]) => tasks.filter(task => !task.completed))
    );
  }

  public get completedTasks$() {
    return this.tasks$.pipe(
      map((tasks: Task[]) => tasks.filter(task => !!task.completed))
    );
  }

  public get lastIdTask$() {
    return this.tasks$.pipe(
      first(),
      map((tasks: Task[]) => {
        const last = tasks.length - 1;
        return tasks[last].id;
      })
    );
  }
}
