import { Component, OnInit, Input } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';
import { Phase } from '../../../models/phase';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PhaseService } from '../../../services/phase-service';
import { Location } from '@angular/common';
import { AddFieldComponent } from '../../../input-fields/add-field/add-field.component';
import { FieldModel } from '../../../models/field.model';
import { DragulaService } from 'ng2-dragula';
import { FieldTypeValidationService } from '../../../services/field-type-validation.service'
import { HelperService } from '../../../services/helper.service';

@Component({
  selector: 'app-detailed-phase',
  templateUrl: './detailed-phase.component.html',
  styleUrls: ['./detailed-phase.component.css'],
  providers: [FieldTypeValidationService]
})
export class DetailedPhaseComponent implements OnInit {

  modalActionsCreateFields = new EventEmitter<string|MaterializeAction>();
  modalActionsUpdatePhase = new EventEmitter<string|MaterializeAction>();  
  // @Input() fields: AddFieldComponent[];
  fields: FieldModel[];
  // fields = [];
  phase: Phase;
  order = 0;
  fieldTypes = {};
  
  @Input()
  isAbleEdit: boolean;
  
  constructor(private location: Location, private route: ActivatedRoute, private phaseService: PhaseService, private dragulaService: DragulaService, private fieldTypeValidationService: FieldTypeValidationService,
    private helperService: HelperService) {
    this.fields = [];

    this.route.paramMap
    .switchMap((params: ParamMap) => this.phaseService.get(+params.get('id'))) //El + es porque el recibe todo en string, con + lo pasa a numero
    .subscribe(phase => {
      this.isAbleEdit = false;
        phase.startDate = this.helperService.ymdToDate(phase.startDate);
        phase.endDate = this.helperService.ymdToDate(phase.endDate);
        phase.startApprovalDate = this.helperService.ymdToDate(phase.startApprovalDate);
        phase.endApprovalDate = this.helperService.ymdToDate(phase.endApprovalDate);
      this.phase = phase;
      this.phaseService.getFieldsByPhase(this.phase.id).subscribe(
        (response) => {
          for (var i = 0; i < response.length; i++) {
            let aux_field = new FieldModel(response[i].idPhase, response[i].order);
            aux_field.name = response[i].name;
            aux_field.selectedOptionName = response[i].fieldType.nombre;
            aux_field.type = response[i].fieldType.id;
            aux_field.obligatory = response[i].obligatory;
            aux_field.idField = response[i].id;
            aux_field.order = parseInt(response[i].order);
            if('validation' in  response[i] && response[i].validation != null){
              aux_field.selectedValidation = response[i].validation.fieldTypeValidation.fieldType.id;
              aux_field.selectedValidationName = response[i].validation.fieldTypeValidation.fieldType.nombre;
            }else{
              aux_field.selectedValidationName = "N/A";
            }
            
            this.fieldTypeValidationService.get(aux_field.type).subscribe(fieldTypesValidations => {
              aux_field.validationOptions = fieldTypesValidations;
            },
            err => {
            });

            this.fields.push(aux_field)
          }
          this.fields.sort(function(a, b) {
            return a.order - b.order;
          });
        },
        (err) => {
          console.log(err)
      });
    });



/*     this.route.paramMap
    .switchMap((params: ParamMap) => this.phaseService.getFieldsByPhase(+params.get('id')))
    .map((res: Response) => res.json())
    .subscribe(
      (res) => {
        console.log("RESPUESTA")
        console.log(res)
      },
      (err) => {
        console.log(err)
    }); */
    

    this.order = this.fields.length;
    dragulaService.drop.subscribe((value) => {
      this.onDropModel(value.slice(1));
      this.onDrop(value.slice(1));
    });
  }
  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
  }

  private onDrop(args) {
    let [e, el] = args;
    // this.removeClass(e, 'grabbable_active');
  }

  ngOnInit() {
  }

  onDeletedField(arg){
    let auxField = JSON.parse(JSON.stringify(arg));
    
    this.fields.splice(auxField.order, 1);
    for(var i = 0; i < this.fields.length; i++){
      if(this.fields[i].order > auxField.order){
        this.fields[i].order -= 1;
      }
    }
  }

  onCreatedField(arg){
    let auxField = JSON.parse(JSON.stringify(arg))
    auxField.order = this.fields.length+1;
    this.fields.push(auxField);
  }

/*   openModalCreateFields() {
    this.modalActionsCreateFields.emit({action:"modal",params:['open']});
  }
  closeModalCreateFields() {
    this.modalActionsCreateFields.emit({action:"modal",params:['close']});
  } */

  openModalUpdatePhase() {
    this.modalActionsUpdatePhase.emit({action:"modal",params:['open']});
  }
  closeModalUpdatePhase() {
    this.modalActionsUpdatePhase.emit({action:"modal",params:['close']});
  }

  goBack(): void {
    this.location.back();
  }

  getIsAbleToEdit() {
    var today = new Date();
    today.setHours(0,0,0);
    var startDate = this.phase.startDate;
    startDate.setHours(0,0,0);
    
    this.isAbleEdit = true;
    if (startDate < today) {
      this.isAbleEdit = false;      
    }
    return this.isAbleEdit;
  }
}
