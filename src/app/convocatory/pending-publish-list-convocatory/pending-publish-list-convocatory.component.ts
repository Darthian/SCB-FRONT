import { Component, OnInit } from '@angular/core';
import { ConvocatoryService } from '../../services/convocatory.service';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pending-publish-list-convocatory',
  templateUrl: './pending-publish-list-convocatory.component.html',
  styleUrls: ['./pending-publish-list-convocatory.component.css']
})
export class PendingPublishListConvocatoryComponent implements OnInit {

   public convocatories: any = [];
  
  constructor(private authService: AuthService,
    private router: Router, private convocatoryService : ConvocatoryService) { }

  ngOnInit() {
    this.loadPendingPublishConvocatories();
  }

 loadPendingPublishConvocatories() {
  let user = this.authService.getCurrentUser();
    this.convocatoryService.getPendingPublish(user.email).subscribe(convocatories => {
      this.convocatories = convocatories;
    });
  }

  goToConvocatory(convocatoryId: number) {
     this.router.navigate(['/convocatory/'+ convocatoryId]);
  }

}
