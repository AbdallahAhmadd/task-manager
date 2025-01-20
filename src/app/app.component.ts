import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTaskListComponent } from './app-task-list/app-task-list.component';
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppTaskListComponent, MatIcon],
  template: `
    <app-app-task-list></app-app-task-list>
    <button mat-fab color="primary" (click)="openAddTaskModal()">
    <mat-icon>add</mat-icon>
    </button>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'client';
  constructor(private dialog: MatDialog) { }

  openAddTaskModal(): void {
    this.dialog.open(AddTaskModalComponent, {
      width: '400px',
    });


  }



}
