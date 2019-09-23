import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { MaterializeModule } from "angular2-materialize";
import { RecaptchaModule } from 'ng2-recaptcha';
import { HomeComponent } from './home/home.component';
import { OffererRoutingModule } from './offerer-routing.module'
import { ConvocatoryModule } from '../convocatory/convocatory.module'

@NgModule({
  imports: [
    MaterializeModule,
    CommonModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    OffererRoutingModule,
    ConvocatoryModule
  ],
  declarations: [CreateComponent, HomeComponent],
  exports: [CreateComponent, OffererRoutingModule]
})
export class OffererModule { }
