import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.css']
})
export class TodoTasksComponent implements OnInit {
  @Output() onDelete;
  @Output() onEdit;
  @Input() list: any;
  constructor() {}

  ngOnInit() {}

  deleteTask() {}

  editTask() {}
}
