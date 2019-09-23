import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, SimpleChange, 
  OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Convocatory } from '../../../models/convocatory';
import { Phase } from '../../../models/phase';
import { HelperService } from '../../../services/helper.service';
import { PhaseService } from '../../../services/phase-service';
import swal from 'sweetalert2';
declare var $: any;
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-create-phase',
  templateUrl: './create-phase.component.html',
  styleUrls: ['./create-phase.component.css']
})
export class CreatePhaseComponent implements OnChanges, OnInit {
  phase: Phase = new Phase();
  summary: string = "";
  @Input()
  convocatory: Convocatory; 

  //Tooltips
  name_tooltip = undefined;
  description_tooltip = undefined;
  startDate_tooltip = undefined;
  endDate_tooltip = undefined;
  startApprovalDate_tooltip = undefined;
  endApprovalDate_tooltip = undefined;
  resultDate_tooltip = undefined;

  
  @Output()
  cancelation = new EventEmitter<any>();

  constructor(private phaseService: PhaseService, 
    private helperService: HelperService) { 
      this.phase.startDate = new Date();
      this.phase.endDate = new Date();
      this.phase.startApprovalDate = new Date();
      this.phase.endApprovalDate = new Date();
    }

    options: DatepickerOptions = {
      minYear: 1970,
      maxYear: 2030,
      displayFormat: 'MMM D[,] YYYY',
      barTitleFormat: 'MMMM YYYY',
      firstCalendarDay: 1 // 0 - Sunday, 1 - Monday
      //locale: frLocale
    };

  ngOnInit() {    
  }

  ngAfterViewInit() {    
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
  }

  registerPhase() {  
    this.cleanSummay();
    if (!this.isValidPhase()) {
      swal('Oops...', 'Completa la información', 'error').catch(swal.noop);
      return;
    }
    this.phase.convocatory = this.convocatory; 
    this.phaseService.post(this.phase).subscribe(response => {
      this.phase = new Phase();      
      swal('Exito!', 'Se ha creado la fase satisfactoriamente', 'success').catch(swal.noop);
      this.cancelRegisterPhase(true);
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
      if (this.phase.name === undefined ||this.phase.name === "") {
        this.name_tooltip = [];
        this.name_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "El nombre es requerido.<br/>";
        isValid = false;
      }
            
      if (this.phase.startDate === undefined || this.phase.startDate.toString() === "") {
        this.startDate_tooltip = [];
        this.startDate_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "La fecha de inicio de fase es obligatoria.<br/>";
        isValid = false;
      }

      if (this.phase.endDate === undefined || this.phase.endDate.toString() === "") {
        this.endDate_tooltip = [];
        this.endDate_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "La fecha de fin de fase es obligatoria.<br/>";
        isValid = false;
      }

      if (this.phase.startApprovalDate === undefined || this.phase.startApprovalDate.toString() === "") {
        this.startApprovalDate_tooltip = [];
        this.startApprovalDate_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "La fecha de inicio de aprobacion es obligatoria.<br/>";
        isValid = false;
      }

      if (this.phase.endApprovalDate === undefined || this.phase.endApprovalDate.toString() === "") {
        this.endApprovalDate_tooltip = [];
        this.endApprovalDate_tooltip['error'] = "Este campo es obligatorio";
        this.summary += "La fecha de fin de fase es obligatoria.<br/>";
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
          this.summary += "Fecha de inicio no puede ser menor a hoy.<br/>";
          isValid = false;
        }

        var endDate =  this.phase.endDate;          
        if (endDate < today) {
          this.endDate_tooltip = [];
          this.endDate_tooltip['error'] = "Fecha de fin no puede ser menor a hoy.";
          this.summary += "Fecha de fin no puede ser menor a hoy.<br/>";
          isValid = false;
        } else if (endDate < startDate){
          this.endDate_tooltip = [];
          this.endDate_tooltip['error'] = "Fecha de fin no puede ser menor a la fecha de inicio.";
          this.summary += "Fecha de fin no puede ser menor a la fecha de inicio.<br/>";
          isValid = false;
        }

        var startApprovalDate =  this.phase.startApprovalDate;
        if (startApprovalDate < endDate) {
          this.startApprovalDate_tooltip = [];
          this.startApprovalDate_tooltip['error'] = "Fecha de inicio de aprobación no puede ser menor a la fecha de fin.";
          this.summary += "Fecha de inicio de aprobación no puede ser menor a la fecha de fin.<br/>";
          isValid = false;
        } /*else if (startApprovalDate > endDate)
        {
          this.startApprovalDate_tooltip = [];
          this.startApprovalDate_tooltip['error'] = "Fecha de inicio de aprobación no puede ser mayor a la fecha fin.";
          isValid = false;
        }*/

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
        if (elementToMap !== undefined)
        {
          document.getElementById(variable).setAttributeNode(att);
          document.getElementById(variable).classList.add("invalid");
        }
      }
    }
  }

  cancelRegisterPhase(sucess: boolean) {
    this.phase = new Phase();
    this.cleanSummay();
    this.cancelation.emit(sucess);
  }
  
  cleanSummay() {
    this.summary = "";
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Change - ');
    console.log(changes.convocatory);
    const conv: SimpleChange = changes.convocatory;
    /*console.log('prev value: ', name.previousValue);
    console.log('got name: ', name.currentValue);*/
    console.log('current');
    console.log(conv.currentValue);
    console.log('previous');
    console.log(conv.previousValue);
    this.convocatory = conv.currentValue;
  }
}



