import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AddFieldComponent } from './add-field/add-field.component';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterializeModule,
    BrowserModule,
    NgDatepickerModule
  ],
  declarations: [FileUploadComponent, AddFieldComponent],
  exports: [FileUploadComponent, AddFieldComponent]
})
export class InputFieldsModule { }
