import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppTaskListComponent } from './app-task-list/app-task-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppTaskListComponent],
  template: `
    <app-app-task-list></app-app-task-list>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'client';
}
