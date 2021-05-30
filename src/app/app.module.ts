import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { TemporaryCertificateComponent } from './temporary-certificate/temporary-certificate.component';
import { TemporaryCertificateListComponent } from './temporary-certificate/temporary-certificate-list/temporary-certificate-list.component';
import { CreateTemporaryCertificateComponent } from './temporary-certificate/create-temporary-certificate/create-temporary-certificate.component';
import { UpdateTemporaryCertificateComponent } from './temporary-certificate/update-temporary-certificate/update-temporary-certificate.component';
import { MainCertificateComponent } from './main-certificate/main-certificate.component';
import { CreateMainCertificateComponent } from './main-certificate/create-main-certificate/create-main-certificate.component';
import { UpdateMainCertificateComponent } from './main-certificate/update-main-certificate/update-main-certificate.component';
import { MainCertificateListComponent } from './main-certificate/main-certificate-list/main-certificate-list.component';
import { RegisterComponent } from './login/register/register.component';
import { CommonComponent } from './common/common.component';
import { DialogueComponent } from './dialogue/dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    TemporaryCertificateComponent,
    TemporaryCertificateListComponent,
    CreateTemporaryCertificateComponent,
    UpdateTemporaryCertificateComponent,
    MainCertificateComponent,
    CreateMainCertificateComponent,
    UpdateMainCertificateComponent,
    MainCertificateListComponent,
    RegisterComponent,
    CommonComponent,
    DialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
