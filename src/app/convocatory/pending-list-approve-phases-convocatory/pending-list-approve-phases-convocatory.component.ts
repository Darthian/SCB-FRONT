import { Component, OnInit } from '@angular/core';
import { ConvocatoryService } from '../../services/convocatory.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pending-list-approve-phases-convocatory',
  templateUrl: './pending-list-approve-phases-convocatory.component.html',
  styleUrls: ['./pending-list-approve-phases-convocatory.component.css']
})
export class PendingListApprovePhasesConvocatoryComponent implements OnInit {

  public convocatories: any = [];
  
  constructor(private authService: AuthService,
    private router: Router, private convocatoryService : ConvocatoryService) { }

  ngOnInit() {
    this.loadPendingApprovedPhases();
  }

  loadPendingApprovedPhases() {
    let user = this.authService.getCurrentUser();
    this.convocatoryService.getPendingApprovePhases(user.email).subscribe(convocatories => {
      this.convocatories = convocatories;
      console.log(convocatories)
    });
  }

  goToConvocatory(convocatoryId: number) {
    this.router.navigate(['/approveApplicants/'+ convocatoryId]);
  }

}
