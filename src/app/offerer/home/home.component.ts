import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';
import { NgDatepickerModule } from 'ng2-datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 public action: String = 'published';

  modalActionsCreateConvocatory = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  ngOnInit() {
  }

goToPublished() {
    this.action = 'published';
  }
  goToPendingPublish() {
    this.action = 'pending';
  }

  goToPendingApproveApplicants() {
    this.action = 'pendingApprovedPhases';
  }
  
  openModalCreateConvocatory() {
      this.modalActionsCreateConvocatory.emit({action:"modal",params:['open']});
  }
  closeModalCreateConvocatory(sucess: any) {        
    this.modalActionsCreateConvocatory.emit({action:"modal",params:['close']});
    if (sucess) {
      this.action = "";
      this.goToPendingPublish();    
    }
  }
}