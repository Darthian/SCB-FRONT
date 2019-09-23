import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { ValidateComponent } from './validate/validate.component';
import { CreateComponent } from './create/create.component';
import { RecaptchaModule } from 'ng2-recaptcha';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
//Forms
import { PlaceService } from '../services/place-service';
import { ApplicantConvocatoryService } from '../services/applicant-convocatory.service'
import { ApplicantRoutingModule } from './applicant-routing.module';
import { FormComponent } from './form/form.component';
import { DynamicFormComponent } from './form/question/dynamic-form.component';
import { DynamicFormQuestionComponent } from './form/question/dynamic-form-question.component';
import { HomeComponent } from './home/home.component';
import { PublishedToApplyListConvocatoryComponent } from './published-list-to-apply-convocatory/published-list-to-apply-convocatory.component';
import { InscribedListConvocatoryComponent } from './inscribed-list-convocatory/inscribed-list-convocatory.component';
import { PlacesListConvocatoryComponent } from './places-list-convocatory/places-list-convocatory.component';
import { RejectPlaceComponent } from './reject-place/reject-place.component';
import { PhaseToApplyConvocatoryComponent } from './phase-to-apply-convocatory/phase-to-apply-convocatory.component';
import { ConvocatoryModule } from '../convocatory/convocatory.module';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicantRoutingModule,
    ConvocatoryModule,
    RecaptchaModule.forRoot(), // Keep in mind the "forRoot"-magic nuances!
  ],
  declarations: [
    ValidateComponent,
    CreateComponent, UploadDocumentsComponent,
    //Forms
    FormComponent, DynamicFormComponent, DynamicFormQuestionComponent, HomeComponent, PublishedToApplyListConvocatoryComponent, InscribedListConvocatoryComponent, PlacesListConvocatoryComponent, RejectPlaceComponent, PhaseToApplyConvocatoryComponent
  ],
  exports: [
    CreateComponent
  ],
  providers: [
    ApplicantConvocatoryService,
    PlaceService
  ]
})
export class ApplicantModule { }
