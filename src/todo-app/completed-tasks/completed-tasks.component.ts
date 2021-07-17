import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  @Output() onDelete;
  @Output() onEdit;
  @Input() list;
  constructor() { }

  ngOnInit() {
  }

  deleteTask() {

  }

  editTask() {
    
  }
}