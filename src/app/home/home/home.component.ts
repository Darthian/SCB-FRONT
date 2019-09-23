import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploadComponent } from '../../input-fields/file-upload/file-upload.component';
import { AddFieldComponent } from '../../input-fields/add-field/add-field.component';
import { environment } from '../../../environments/environment';
import { MaterializeDirective, MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();
  selectOptions = [];
  
  fullImagePath: string;
  constructor() { 
    this.fullImagePath = environment.ClientUrl + '/assets/img/img1.jpg';
    
    window.setTimeout(()=>{
      this.selectOptions = [
        {value:1,name:"CC"},
        {value:2,name:"TI"},
        {value:3,name:"CE"}
      ]
    },100);
  }

  ngOnInit() {
  }
  
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
