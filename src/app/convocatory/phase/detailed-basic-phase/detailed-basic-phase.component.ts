import { Component, OnInit, Input } from '@angular/core';
import { Phase } from '../../../models/phase';
import { HelperService } from '../../../services/helper.service';

@Component({
  selector: 'app-detailed-basic-phase',
  templateUrl: './detailed-basic-phase.component.html',
  styleUrls: ['./detailed-basic-phase.component.css']
})
export class DetailedBasicPhaseComponent implements OnInit {

  @Input()
  phase: Phase;

  constructor(private helperService: HelperService) { 
  }

  ngOnInit() {
  }

  getFormatDateStartDate() {
    return this.helperService.getDateFormatNameMonthMonthDay(this.phase.startDate);
  }

  getFormatDateEndDate() {
    return this.helperService.getDateFormatNameMonthMonthDay(this.phase.endDate);
  }

  getFormatDateStartApprovalDate() {
    return this.helperService.getDateFormatNameMonthMonthDay(this.phase.startApprovalDate);
  }

  getFormatDateEndApprovalDate() {
    return this.helperService.getDateFormatNameMonthMonthDay(this.phase.endApprovalDate);
  }
}
