import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateConvocatoryComponent } from './create-convocatory/create-convocatory.component';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { ConvocatoryTypeService } from '../services/convocatory-type.service'
import { ConvocatoryService } from '../services/convocatory.service'
import { AuthService } from '../services/auth.service';
import { PhaseService } from '../services/phase-service';
import { PublishedListConvocatoryComponent } from './published-list-convocatory/published-list-convocatory.component';
import { PendingPublishListConvocatoryComponent } from './pending-publish-list-convocatory/pending-publish-list-convocatory.component';
import { DetailedConvocatoryComponent } from './detailed-convocatory/detailed-convocatory.component';
import { ListPhasesComponent } from './phase/list-phases/list-phases.component';
import { CreatePhaseComponent } from './phase/create-phase/create-phase.component';
import { UpdatePhaseComponent } from './phase/update-phase/update-phase.component';
import { DetailedPhaseComponent } from './phase/detailed-phase/detailed-phase.component';

import { PostulatedConvocatoryComponent } from './postulation/postulated-convocatory/postulated-convocatory.component';
import { ConvocatoryRoutingModule } from './convocatory-routing.module';
import { PublishedConvocatoryComponent } from './published-convocatory/published-convocatory.component';
import { DetailBasicConvocatoryComponent } from './detail-basic-convocatory/detail-basic-convocatory.component';
import { HelperService } from '../services/helper.service';
import { DetailedBasicPhaseComponent } from './phase/detailed-basic-phase/detailed-basic-phase.component';
import { EditConvocatoryComponent } from './edit-convocatory/edit-convocatory.component';
import { EditPhaseComponent } from './phase/edit-phase/edit-phase.component';
import { PendingListApprovePhasesConvocatoryComponent } from './pending-list-approve-phases-convocatory/pending-list-approve-phases-convocatory.component';
import { InputFieldsModule } from '../input-fields/input-fields.module';
import { ConvocatoryPendingApprovePhasesComponent } from './convocatory-pending-approve-phases/convocatory-pending-approve-phases.component';
import { ApplicantToApprovePhaseComponent } from './phase/applicant-to-approve-phase/applicant-to-approve-phase.component';
import { DragulaModule } from 'ng2-dragula';
import { InputFielDirective } from './phase/detailed-phase/detailed-phase-field.directive';
import { ApproveApplicantsComponent } from './approve-applicants/approve-applicants.component';
import { NgDatepickerModule } from 'ng2-datepicker';
//Applicant per Phase
import { DetailApplicantPhaseAnswerComponent } from './detail-applicant-phase-answer/detail-applicant-phase-answer.component';
import { ApplicantPhaseService } from '../services/applicant-phase.service';

@NgModule({
  imports: [
    // AddFieldComponent,
    CommonModule,
    MaterializeModule,
    FormsModule,
    ConvocatoryRoutingModule,
    InputFieldsModule,
    DragulaModule,
    NgDatepickerModule
  ],
  exports: [
    CreateConvocatoryComponent,
    PendingPublishListConvocatoryComponent,
    PublishedListConvocatoryComponent,
    PendingListApprovePhasesConvocatoryComponent,
    DetailBasicConvocatoryComponent
  ],
  declarations: [
    // AddFieldComponent,
    ConvocatoryPendingApprovePhasesComponent,
    CreateConvocatoryComponent,
    PublishedListConvocatoryComponent,
    PendingPublishListConvocatoryComponent,
    DetailedConvocatoryComponent,
    ListPhasesComponent,
    CreatePhaseComponent,
    UpdatePhaseComponent,
    DetailedPhaseComponent,
    DetailApplicantPhaseAnswerComponent,
    PostulatedConvocatoryComponent,
    PublishedConvocatoryComponent,
    DetailBasicConvocatoryComponent,
    DetailedBasicPhaseComponent,
    EditConvocatoryComponent,
    EditPhaseComponent,
    PendingListApprovePhasesConvocatoryComponent,
    ApplicantToApprovePhaseComponent,
    InputFielDirective,
    ApproveApplicantsComponent
  ],
  providers: [
    ConvocatoryTypeService,
    ConvocatoryService,
    AuthService,
    PhaseService,
    HelperService,
    ApplicantPhaseService
  ]
})
export class ConvocatoryModule { }
