import { Component, OnInit } from '@angular/core';
import {MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';
import { Convocatory } from '../../models/convocatory';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ConvocatoryService } from '../../services/convocatory.service';
import { ConvocatoryType } from '../../models/convocatory-type';
import { Location } from '@angular/common';
import { ConvocatoryState } from '../../models/convocatory-state';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-detailed-convocatory',
  templateUrl: './detailed-convocatory.component.html',
  styleUrls: ['./detailed-convocatory.component.css']
})
export class DetailedConvocatoryComponent implements OnInit {

  modalActionsCreatePhase = new EventEmitter<string|MaterializeAction>();
  modalActionsUpdateConvocatory = new EventEmitter<string|MaterializeAction>();
  isAbleEdit: boolean;
  convocatory: Convocatory;
  refreshListPhases : boolean;

  constructor(private location: Location, 
    private route: ActivatedRoute, private convocatoryService: ConvocatoryService,
    private helperService: HelperService) { 
    this.route.paramMap
      .switchMap((params: ParamMap) => this.convocatoryService.get(+params.get('id'))) //El + es porque el recibe todo en string, con + lo pasa a numero
      .subscribe(convocatory => {
        
        this.convocatory = convocatory;
        this.convocatory.resultDate = helperService.ymdToDate(convocatory.resultDate);
        
        this.isAbleEdit = true;
        if (this.convocatory.convocatoryState.name === 'Publicada'){
          this.isAbleEdit= false;
        }
      });
  }

  ngOnInit() {
  }

  openModalCreatePhase() {
    this.modalActionsCreatePhase.emit({action:"modal",params:['open']});
  }

  closeModalCreatePhase(sucess: any) {        
    this.modalActionsCreatePhase.emit({action:"modal",params:['close']});
    if (sucess)
    {
      this.refreshListPhases = !this.refreshListPhases;
    }
  }

  openModalUpdateConvocatory() {
    this.modalActionsUpdateConvocatory.emit({action:"modal",params:['open']});
  }
  closeModalUpdateConvocatory() {
    this.modalActionsUpdateConvocatory.emit({action:"modal",params:['close']});
  }

  goBack(): void {
    this.location.back();
  }

  
}
