import { Component, OnInit } from '@angular/core';
//Service
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
  providers: [AuthService]
})
export class AdministratorComponent implements OnInit {

  public action: String = 'pending';

  constructor() { }

  ngOnInit() {
  }

  goToDenied() {

    this.action = 'denied';
  }
  goToApproved() {
    this.action = 'approved';
  }
  goToPending() {
    this.action = 'pending';
  }
}
