//Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
//Modules
import { ApplicantModule } from './applicant/applicant.module';
import { AdministratorModule } from './administrator/administrator.module';
import { OffererModule } from './offerer/offerer.module';
import { SecurityModule } from './security/security.module';
import { ConvocatoryModule } from './convocatory/convocatory.module';

//Routes
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Provider } from '@angular/core';
import { ɵROUTER_PROVIDERS } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { InputFieldsModule } from './input-fields/input-fields.module';
//Components
// import { HomeComponent } from './home/home.component';
// import { FileUploadComponent } from './input-fields/file-upload/file-upload.component';
import { AppComponent } from './app.component';
//Services
import { UserService } from './services/user.service';
//Pipes


@NgModule({
  declarations: [
    AppComponent
    // HomeComponent,
    // FileUploadComponent,
  ],
  imports: [
    HomeModule,
    BrowserModule,
    MaterializeModule,
    ApplicantModule,
    AdministratorModule,
    SecurityModule,
    OffererModule,
    HttpModule,
    AppRoutingModule,
    InputFieldsModule,
    ConvocatoryModule
  ],
  providers: [UserService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
