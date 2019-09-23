import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { InputFieldsModule } from '../input-fields/input-fields.module';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { ApplicantModule } from '../applicant/applicant.module';
import { OffererModule } from '../offerer/offerer.module';

@NgModule({
  imports: [
    CommonModule,
    InputFieldsModule,
    MaterializeModule,
    ApplicantModule,
    OffererModule,
    FormsModule 
  ],
  declarations: [HomeComponent, RegisterComponent],
  exports: [
    RegisterComponent
  ]
})
export class HomeModule { }
