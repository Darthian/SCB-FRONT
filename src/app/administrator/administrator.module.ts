import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';

//Components
import { AdministratorComponent } from './administrator.component';
import { OfferersApprovedComponent } from './oferrer/offerers-approved/offerers-approved.component';
import { OfferersPendingComponent } from './oferrer/offerers-pending/offerers-pending.component';
import { OfferersDeniedComponent } from './oferrer/offerers-denied/offerers-denied.component';
@NgModule({
    imports: [
        CommonModule,
        MaterializeModule,
        FormsModule
    ],
    declarations: [AdministratorComponent, OfferersApprovedComponent, OfferersPendingComponent, OfferersDeniedComponent],
    exports: [
    ]
})
export class AdministratorModule { }
