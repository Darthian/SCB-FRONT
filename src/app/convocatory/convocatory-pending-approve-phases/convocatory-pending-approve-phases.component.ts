import { Component, OnInit } from '@angular/core';
import {MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';
import { Convocatory } from '../../models/convocatory';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ConvocatoryService } from '../../services/convocatory.service';
import { ConvocatoryType } from '../../models/convocatory-type';
import { Location } from '@angular/common';
import { ConvocatoryState } from '../../models/convocatory-state';

@Component({
  selector: 'app-convocatory-pending-approve-phases',
  templateUrl: './convocatory-pending-approve-phases.component.html',
  styleUrls: ['./convocatory-pending-approve-phases.component.css']
})
export class ConvocatoryPendingApprovePhasesComponent implements OnInit {

  modalActionsCreatePhase = new EventEmitter<string|MaterializeAction>();
  modalActionsUpdateConvocatory = new EventEmitter<string|MaterializeAction>();
  convocatory: Convocatory;

  constructor(private location: Location, 
    private route: ActivatedRoute, private convocatoryService: ConvocatoryService) { 
    this.convocatory = new Convocatory();
    this.convocatory.name="aaaa";
    this.convocatory.numberBeneficiaries = 24;
    this.convocatory.convocatoryType = new ConvocatoryType();
    this.convocatory.convocatoryType.name = "pepito";
    this.convocatory.resultDate = new Date(2017, 1,1);
    this.convocatory.convocatoryState = new ConvocatoryState();
    this.convocatory.convocatoryState.name = "Pusblicada";
  }

  ngOnInit() {
    /*this.convocatory = new Convocatory();
    this.convocatory.name="aaaa";
    this.convocatory.numberBeneficiaries = 24;*/
    //TODO: UnComment this part
    console.log("ENTRA")
    this.route.paramMap
    .switchMap((params: ParamMap) => this.convocatoryService.get(+params.get('id'))) //El + es porque el recibe todo en string, con + lo pasa a numero
    .subscribe(convocatory => this.convocatory = convocatory);
 
  }
  
  goBack(): void {
    this.location.back();
  }


}
