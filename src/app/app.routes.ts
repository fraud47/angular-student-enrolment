import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { TeachersComponent } from './teachers/teachers.component';

export const routes: Routes = [
    {path:"students", component: StudentsComponent},
    {path:"teachers", component: TeachersComponent},
    {path:"login", component: LoginComponent}
];
