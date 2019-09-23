import { Component, OnInit, Input } from '@angular/core';
import { Convocatory } from '../../models/convocatory';
import { ConvocatoryType } from '../../models/convocatory-type';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-detail-basic-convocatory',
  templateUrl: './detail-basic-convocatory.component.html',
  styleUrls: ['./detail-basic-convocatory.component.css']
})
export class DetailBasicConvocatoryComponent implements OnInit {

  @Input()
  convocatory: Convocatory;
  constructor(private helperService: HelperService) { 
  }

  ngOnInit() {    
  }

  getFormatDate() {
    return this.helperService.getDateFormatNameMonthMonthDay(this.convocatory.resultDate);
  }

}
