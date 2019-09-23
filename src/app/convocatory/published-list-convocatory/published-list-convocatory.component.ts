import { Component, OnInit } from '@angular/core';
import { ConvocatoryService } from '../../services/convocatory.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-published-list-convocatory',
  templateUrl: './published-list-convocatory.component.html',
  styleUrls: ['./published-list-convocatory.component.css']
})
export class PublishedListConvocatoryComponent implements OnInit {

  public convocatories: any = [];
  
  constructor(private authService: AuthService,
    private router: Router, private convocatoryService : ConvocatoryService) { }

  ngOnInit() {
    this.loadPublishedConvocatories();
  }

 loadPublishedConvocatories() {
  let user = this.authService.getCurrentUser();
  this.convocatoryService.getPublished(user.email).subscribe(convocatories => {
      this.convocatories = convocatories;
    });
  }

  goToConvocatory(convocatoryId: number) {
     this.router.navigate(['/convocatory/'+ convocatoryId]);
  }
}
