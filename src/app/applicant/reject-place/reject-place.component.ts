import { Component, OnInit, Output, EventEmitter, Input, OnChanges,
  SimpleChanges, SimpleChange } from '@angular/core';
import { FormsModule } from '@angular/forms';
import swal from 'sweetalert2';
import { PlaceService } from '../../services/place-service';
import { RejectPlace } from '../../models/reject-place';

@Component({
  selector: 'app-reject-place',
  templateUrl: './reject-place.component.html',
  styleUrls: ['./reject-place.component.css']
})
export class RejectPlaceComponent implements OnChanges, OnInit {

  message: String = "";
  summary: string = "";
  
  @Input()
  idPlace: number;

  @Output()
  cancelation = new EventEmitter();

  //Tooltips
  message_tooltip = undefined;

  constructor(private placeService : PlaceService) { }

  ngOnInit() {
    console.log(this.idPlace);
  }

  reject() {
    if(!this.validate()){
      return;
    }
    var rejectPlace = new RejectPlace();
    rejectPlace.idPlace = this.idPlace;
    rejectPlace.rejectCause = this.message;
    this.placeService.reject(rejectPlace).subscribe(response => {
      swal('Exito!', 'Se ha rechazado la plaza', 'success').catch(swal.noop);
      this.cancel();
    },
    err => {
      console.log(err);
      console.log(err.json());
      this.handleUiErrors(err);
      swal('Oops...', 'Algo salio mal!', 'error').catch(swal.noop);
    });
  }

  validate() : boolean {
    this.cleanSummay();
    if (this.message === undefined || this.message === ""){
      this.summary = "";
      this.message_tooltip = [];
      this.message_tooltip['error'] = "La causal es obligatoria.";
      this.summary += "La causal es obligatoria.<br/>";
      return false;
    }
    if (this.idPlace === undefined || this.idPlace <= 0){
      this.summary += "La plaza es obligatoria.<br/>";
      return false;
    }
    return true;
  }

  cancel() {
    this.message = "";
    this.cleanSummay();
    this.cancelation.emit();
  }

  cleanSummay() {
    this.summary = "";
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Change - ');
    console.log(changes.idPlace);
    const conv: SimpleChange = changes.idPlace;
    console.log('current');
    console.log(conv.currentValue);
    console.log('previous');
    console.log(conv.previousValue);
    this.idPlace = conv.currentValue;
  }

  handleUiErrors(err: any) {  
    this.cleanSummay();  
    let errors = err.json();
    for (var variable in errors) {
      if (errors.hasOwnProperty(variable)) {
        var element = errors[variable];
        switch (variable) {
          case "message": {
            this.message_tooltip = [];
            this.message_tooltip['error'] = errors[variable];
            this.summary += errors[variable];           
            break;
          }         
          case "summary": {
            this.summary += errors[variable];
            break;
          }
        }
        var att = document.createAttribute("data-tooltip");
        att.value = errors[variable];
        var elementToMap = document.getElementById(variable);
        if (elementToMap !== undefined && elementToMap != null)
        {
          document.getElementById(variable).setAttributeNode(att);
          document.getElementById(variable).classList.add("invalid");
        }
      }
    }
  }
}