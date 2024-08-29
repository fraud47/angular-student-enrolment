import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-create-teacher',
  standalone: true,
  imports: [InputTextModule,ReactiveFormsModule],
  templateUrl: './create-teacher.component.html',
  styleUrl: './create-teacher.component.scss'
})
export class CreateTeacherComponent {
  fb = inject(FormBuilder);


  teacherform = this.fb.nonNullable.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });

  submit() {
  
     
  }

}
