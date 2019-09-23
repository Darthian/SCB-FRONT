import { Component, OnInit } from '@angular/core';
import { ApplicantConvocatoryService } from '../../services/applicant-convocatory.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inscribed-list-convocatory',
  templateUrl: './inscribed-list-convocatory.component.html',
  styleUrls: ['./inscribed-list-convocatory.component.css']
})
export class InscribedListConvocatoryComponent implements OnInit {

   public convocatories: any = [];
  
  constructor(private authService: AuthService,
    private router: Router, private applicantConvocatoryService : ApplicantConvocatoryService) { }

  ngOnInit() {
    this.loadPostulations();
  }

  loadPostulations() {
    let user = this.authService.getCurrentUser();
    this.applicantConvocatoryService.getPostulations(user.email).subscribe(convocatories => {
      this.convocatories = convocatories;
    });
  }

  goToConvocatory(convocatoryId: number) {
    this.router.navigate(['/PhaseToApply/'+ convocatoryId]);
  }

}
