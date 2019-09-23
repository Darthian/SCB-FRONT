import { Component, OnInit, EventEmitter, Input, SimpleChanges, SimpleChange, 
  OnChanges } from '@angular/core';
import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import { Router } from '@angular/router';
import { PhaseService } from '../../../services/phase-service';
import { Phase } from '../../../models/phase';
import swal from 'sweetalert2';
declare var jQuery: any;
declare var $: any;
import { HelperService } from '../../../services/helper.service';

@Component({
  selector: 'app-list-phases',
  templateUrl: './list-phases.component.html',
  styleUrls: ['./list-phases.component.css']
})
export class ListPhasesComponent implements OnChanges, OnInit {
  actions1 = new EventEmitter<string|MaterializeAction>();
  phases : Phase[];
  @Input() 
  convocatoryId: number;
  
  @Input() 
  includeApproveApplicants: boolean;

  @Input()
  refresh: boolean;
  @Input()
  isAbleEdit: boolean;

  constructor(private router: Router, private phaseService: PhaseService,
    private helperService: HelperService) {
      console.log("CONSTRUCTOR")
      console.log(this.convocatoryId)
  }

  ngOnInit() {
    /*let phaseOne = new Phase();
    phaseOne.id = 1;
    phaseOne.name = "nombre 1";
    phaseOne.description = "description 1";
    phaseOne.startDate = "2017/05/21";
    phaseOne.endDate = "2018/05/21";
    phaseOne.startApprovalDate = "2016/05/21";

    let phaseTwo = new Phase();
    phaseTwo.id = 2;
    phaseTwo.name = "nombre 2";
    phaseTwo.description = "description 2";
    phaseTwo.startDate = "3017/05/21";
    phaseTwo.endDate = "3018/05/21";
    phaseTwo.startApprovalDate = "3016/05/21";

    //this.phases = new Phase[1];
    this.phases= [phaseOne, phaseTwo];*/
    this.loadPhases();
  }

  ngAfterViewInit() {    
    $('.collapsible').collapsible({
      accordion : true
    });
  }

  params = [
      {
        onOpen: (el) => {
          console.log("Collapsible open", el);
        },
        onClose: (el) => {
          console.log("Collapsible close", el);
        }
      }
    ];

    values = ["First", "Second", "Third"];

    openFirst() {
      this.actions1.emit({action:"collapsible",params:['open',0]});
    }

    closeFirst() {
      this.actions1.emit({action:"collapsible",params:['close',0]});
    }

    loadPhases() {
      console.log(this.convocatoryId)
      this.phaseService.getByConvocatory(this.convocatoryId)
      .subscribe(phases => {
        console.log(phases);
        for (var i in phases) {
          phases[i].startDate = this.helperService.ymdToDate(phases[i].startDate);
          phases[i].endDate = this.helperService.ymdToDate(phases[i].endDate);
          phases[i].startApprovalDate = this.helperService.ymdToDate(phases[i].startApprovalDate);
          phases[i].endApprovalDate = this.helperService.ymdToDate(phases[i].endApprovalDate);
        }
        this.phases = phases;
      });
    }

    goToPhase(phaseId: number) {
      this.router.navigate(['/phase/'+ phaseId]);
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
      const conv: SimpleChange = changes.convocatoryId;
      const refresh: SimpleChange = changes.refresh;
      if (conv !== undefined){
        this.convocatoryId = conv.currentValue;
      }
      if (refresh !== undefined){
        this.refresh = refresh.currentValue;
        this.loadPhases();
      }
    }

    removePhase(phaseId: number) {
      this.phaseService.delete(phaseId)
      .subscribe(phases => {
        swal('Exito!', 'Se ha eliminado la fase satisfactoriamente', 'success').catch(swal.noop);
        this.loadPhases();
      });
    }

    isAbleToEdit(phase: Phase) : boolean{
      return this.isAbleEdit;

      //TODO: como esta en pendiente publicar la conv. si la pueden editar y demas.
      /*let now = new Date();
      let dateStartPhase = new Date(phase.startDate);

      if(dateStartPhase <= now){
        return false;
      }
      return true;*/
    }

    getFormatDate(date : Date) {
      return this.helperService.getDateFormatNameMonthMonthDay(date);
    }
}
