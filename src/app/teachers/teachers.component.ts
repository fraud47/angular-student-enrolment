import { Component, inject } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import { CreateTeacherComponent } from '../layout/create-teacher/create-teacher.component';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [],
  providers: [DialogService],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent {
  dialogService = inject(DialogService);
  ref: DynamicDialogRef | undefined;

createTeacher(): void {
    this.ref = this.dialogService.open(CreateTeacherComponent,
      {
        width: "60%",
       
        closable: true,
        focusOnShow: true,
        modal: true,
        showHeader: true
      })
  }
}
