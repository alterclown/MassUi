import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common/common.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { CreateMainCertificateComponent } from './main-certificate/create-main-certificate/create-main-certificate.component';
import { MainCertificateComponent } from './main-certificate/main-certificate.component';
import { UpdateMainCertificateComponent } from './main-certificate/update-main-certificate/update-main-certificate.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { StudentComponent } from './student/student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { CreateTemporaryCertificateComponent } from './temporary-certificate/create-temporary-certificate/create-temporary-certificate.component';
import { TemporaryCertificateComponent } from './temporary-certificate/temporary-certificate.component';
import { UpdateTemporaryCertificateComponent } from './temporary-certificate/update-temporary-certificate/update-temporary-certificate.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'common', component: CommonComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'common/main-certificate/create', component: CreateMainCertificateComponent, pathMatch: 'full' },
  { path: 'common/main-certificate', component: MainCertificateComponent, pathMatch: 'full' },
  { path: 'common/main-certificate/update/:id', component: UpdateMainCertificateComponent, pathMatch: 'full' },
  // { path: 'common/student/create', component: CreateStudentComponent, pathMatch: 'full' },
  // { path: 'common/student/update/:id', component: UpdateStudentComponent, pathMatch: 'full' },
  { path: 'common/student', component: StudentComponent, pathMatch: 'full' },
  { path: 'common/temporary-certificate', component: TemporaryCertificateComponent, pathMatch: 'full' },
  { path: 'common/temporary-certificate/create', component: CreateTemporaryCertificateComponent, pathMatch: 'full' },
  { path: 'common/temporary-certificate/update/:id', component: UpdateTemporaryCertificateComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
