import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, SimpleChange, 
  OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Phase } from '../../../models/phase';
import { Convocatory } from '../../../models/convocatory';
import { PhaseService } from '../../../services/phase-service';
import { HelperService } from '../../../services/helper.service';
import swal from 'sweetalert2';
declare var $: any;
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-edit-phase',
  templateUrl: './edit-phase.component.html',
  styleUrls: ['./edit-phase.component.css']
})
export class EditPhaseComponent implements OnChanges, OnInit {

  @Input()
  phase: Phase;
  
  originalName: string;
  originalDescription: string;    
  originalStartDate: Date;
  originalendDate: Date;
  originalStartApprovalDate: Date;    
  originalEndApprovalDate: Date;    
  originalConvocatory: Convocatory;
  summary: string = "";

  //Tooltips
  name_tooltip = undefined;
  description_tooltip = undefined;
  startDate_tooltip = undefined;
  endDate_tooltip = undefined;
  startApprovalDate_tooltip = undefined;
  endApprovalDate_tooltip = undefined;
  resultDate_tooltip = undefined;

  @Output()
  cancelation = new EventEmitter();

  constructor(private phaseService: PhaseService,
    private helperService: HelperService) { }

    options: DatepickerOptions = {
      minYear: 1970,
      maxYear: 2030,
      displayFormat: 'MMM D[,] YYYY',
      barTitleFormat: 'MMMM YYYY',
      firstCalendarDay: 1 // 0 - Sunday, 1 - Monday
      //locale: frLocale
    };

  ngOnInit() {
    this.originalName = this.phase.name;
    this.originalDescription = this.phase.description;    
    this.originalStartDate = this.phase.startDate;
    this.originalendDate = this.phase.endDate;
    this.originalStartApprovalDate = this.phase.startApprovalDate;
    this.originalConvocatory = this.phase.convocatory;
    this.originalEndApprovalDate = this.phase.endApprovalDate;
  }

  ngAfterViewInit() {   
  }
 
  updatePhase() {
    this.cleanSummay();
    this.phase.startDate.setHours(0, 0, 0, 0);
    this.phase.endDate.setHours(0, 0, 0, 0);
    this.phase.startApprovalDate.setHours(0, 0, 0, 0);
    this.phase.endApprovalDate.setHours(0, 0, 0, 0);
    if (!this.isValidPhase()) {
      swal('Oops...', 'Completa la información', 'error').catch(swal.noop);
      return;
    }
    this.phaseService.put(this.phase).subscribe(response => {      
      swal('Exito!', 'Se ha actualizado la fase satisfactoriamente', 'success').catch(swal.noop);
      this.cancelUpdatePhase(true);
    },
      err => {
        console.log("error:");
        console.log(err);
        console.log(err.status);
        console.log(err.json());
        if (err.status == 400) {
          swal('Oops...', 'Algo salio mal!', 'error').catch(swal.noop);
        } else {
          this.handleUiErrors(err);
          swal('Oops...', 'Completa la información', 'error').catch(swal.noop);
        }
      });
  };

  isValidPhase(): boolean {
    let isValid = true;
    try {
      if (this.phase.name === undefined || this.phase.name === "") {
        this.name_tooltip = [];
        this.name_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "El nombre es requerido.<br/>";
        isValid = false;
      }

      if (this.phase.startDate === undefined || this.phase.startDate.toString() === "") {
        this.startDate_tooltip = [];
        this.startDate_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "La fecha de inicio es requerida.<br/>";
        isValid = false;
      }

      if (this.phase.endDate === undefined || this.phase.endDate.toString() === "") {
        this.endDate_tooltip = [];
        this.endDate_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "La fecha de fin es requerida.<br/>";
        isValid = false;
      }

      if (this.phase.startApprovalDate === undefined || this.phase.startApprovalDate.toString() === "") {
        this.startApprovalDate_tooltip = [];
        this.startApprovalDate_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "La fecha de inicio de aprobación es requerida.<br/>";
        isValid = false;
      }

      if (this.phase.endApprovalDate === undefined || this.phase.endApprovalDate.toString() === "") {
        this.endApprovalDate_tooltip = [];
        this.endApprovalDate_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "La fecha de fin de aprobación es requerida.<br/>";
        isValid = false;
      }

      /*if (this.phase.resultDate === undefined || this.phase.resultDate.toString() === "") {
        this.resultDate_tooltip = [];
        this.resultDate_tooltip['error'] = "Este campo es obligatorio";
        isValid = false;
      }*/

      if (!isValid) {
        return false;
      }
      isValid = this.ValidateDates();
    }
    catch (e) {
      swal('Oops...', (<Error>e).message, 'error').catch(swal.noop);
      return false;
    }
    return isValid;
  };

  private ValidateDates(): boolean {
    var isValid = true;
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var startDate =  this.phase.startDate;  
    
    if (startDate < today) {
      this.startDate_tooltip = [];
      this.startDate_tooltip['error'] = "Fecha de inicio no puede ser menor a hoy.";
      this.summary += "La fecha de inicio no puede ser menor a hoy.<br/>";
      isValid = false;
    }

    var endDate =  this.phase.endDate;   
    if (endDate < today) {
      this.endDate_tooltip = [];
      this.endDate_tooltip['error'] = "Fecha de fin no puede ser menor a hoy.";
      this.summary += "La fecha de fin no puede ser menor a hoy.<br/>";
      isValid = false;
    } else if (endDate < startDate) {
      this.endDate_tooltip = [];
      this.endDate_tooltip['error'] = "Fecha de fin no puede ser menor a la fecha de inicio.";
      isValid = false;
    }

    var startApprovalDate =  this.phase.startApprovalDate;        
    if (startApprovalDate < endDate) {
      this.startApprovalDate_tooltip = [];
      this.startApprovalDate_tooltip['error'] = "Fecha de inicio de aprobación no puede ser menor a la fecha de fin.";
      this.summary += "Fecha de inicio de aprobación no puede ser menor a la fecha de fin.<br/>";
      isValid = false;
    }

    var endApprovalDate = this.phase.endApprovalDate;        
    if (endApprovalDate < startApprovalDate) {
      this.endApprovalDate_tooltip = [];
      this.endApprovalDate_tooltip['error'] = "Fecha de fin de aprobación no puede ser menor a la fecha de inicio de aprobación.";
      this.summary += "Fecha de fin de aprobación no puede ser menor a la fecha de inicio de aprobación.<br/>";
      isValid = false;
    } 

    /* var resultDate = new Date(this.phase.resultDate);
     if (resultDate < endDate) {
      this.resultDate_tooltip = [];
      this.resultDate_tooltip['error'] = "Fecha de resultados no puede ser menor a la fecha de fin.";
      isValid = false;
    }*/
    return isValid;
  };

  handleUiErrors(err: any) {
    this.cleanSummay();
    let errors = err.json();
    for (var variable in errors) {
      if (errors.hasOwnProperty(variable)) {
        var element = errors[variable];
        switch (variable) {
          case "name": {
            this.name_tooltip = [];
            this.name_tooltip['error'] = errors[variable];
            break;
          }
          case "description": {
            this.description_tooltip = [];
            this.description_tooltip['error'] = errors[variable];
            break;
          }
          case "startDate": {
            this.startDate_tooltip = [];
            this.startDate_tooltip['error'] = errors[variable];
            break;
          }
          case "endDate": {
            this.endDate_tooltip = [];
            this.endDate_tooltip['error'] = errors[variable];
            break;
          }
          case "startApprovalDate": {
            this.startApprovalDate_tooltip = [];
            this.startApprovalDate_tooltip['error'] = errors[variable];
            break;
          }
          case "endApprovalDate": {
            this.endApprovalDate_tooltip = [];
            this.endApprovalDate_tooltip['error'] = errors[variable];
            break;
          }
          case "summary": {
            this.summary += errors[variable];
            break;
          }
          /*case "resultDate": {
            this.resultDate_tooltip = [];
            this.resultDate_tooltip['error'] = errors[variable];
            break;
          }*/
        }
        var att = document.createAttribute("data-tooltip");
        att.value = errors[variable];
        var elementToMap = document.getElementById(variable);
        if (elementToMap !== undefined) {
          document.getElementById(variable).setAttributeNode(att);
          document.getElementById(variable).classList.add("invalid");
        }
      }
    }
  }

  cancelUpdatePhase(success: boolean) { 
    if (!success){
    this.phase.name = this.originalName;
    this.phase.description = this.originalDescription;
    this.phase.startDate = this.originalStartDate;
    this.phase.endDate = this.originalendDate;
    this.phase.startApprovalDate = this.originalStartApprovalDate;
    this.phase.endApprovalDate = this.originalEndApprovalDate;
    }
    this.cleanSummay(); 
    this.cancelation.emit();
  }

  cleanSummay() {
    this.summary = "";
  }

  ngOnChanges(changes: SimpleChanges) {
    const phase: SimpleChange = changes.phase;
    this.phase = phase.currentValue;
  }
}
