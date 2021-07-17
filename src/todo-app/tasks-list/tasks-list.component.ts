import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Output() onDelete;
  @Output() onEdit;
  @Input() list: any;
  constructor() { }

  ngOnInit() {
  }

}