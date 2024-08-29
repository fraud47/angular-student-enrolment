import { Component, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateStudentComponent } from '../layout/create-student/create-student.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [],
  providers: [DialogService],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  dialogService = inject(DialogService);
  ref: DynamicDialogRef | undefined;

  createStudent(): void {
    this.ref = this.dialogService.open(CreateStudentComponent,
      {
        width: "60%",
       
        closable: true,
        focusOnShow: true,
        modal: true,
        showHeader: true
      })}
}
