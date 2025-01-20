import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-task-modal',
  imports: [ ReactiveFormsModule, MatSelectModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.css',
})
export class AddTaskModalComponent {

  taskForm: FormGroup;
  constructor(private fb: FormBuilder,
     private taskService: TaskService,
     private dialogRef: MatDialogRef<AddTaskModalComponent>,) {

    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(0)]],
      description: [''],
      progress: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      priority: ['Medium', [Validators.required]],
    });
    this.taskForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.createTask(this.taskForm.value).subscribe({
        next: () => {
          console.log('Task created successfully');
          this.dialogRef.close(); 
        },
        error: (err) => {
          console.log('value of form is ', this.taskForm.value);
          console.error('Error creating task:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
  onCancel(): void {
    this.dialogRef.close(); 
  }


}

