import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'
import { PhaseToApplyConvocatoryComponent } from './phase-to-apply-convocatory/phase-to-apply-convocatory.component'

import { FormComponent } from './form/form.component'
const routes: Routes = [
  {
    path: 'HomeApplicant', component: HomeComponent, children: [
    ]
  },
  { path: 'PhaseToApply/:id', component: PhaseToApplyConvocatoryComponent },
  { path: 'form/:id', component: FormComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ApplicantRoutingModule { }