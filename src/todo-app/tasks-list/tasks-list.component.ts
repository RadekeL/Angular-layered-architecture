import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<string>();
  @Input() list: any;
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
