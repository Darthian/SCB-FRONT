import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserLogin } from '../../models/userLogin';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { TypeRoles } from '../../models/type-roles.enum';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  public userLogin: UserLogin;
  public user: User;

  constructor(private authService: AuthService,
    private router: Router) {
    this.userLogin = new UserLogin();
    this.user = new User();
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login(this.userLogin.email, this.userLogin.password).subscribe(obj => {
      this.user = new User(obj);

      this.authService.setCurrentUser(this.user);

      switch (this.user.role) {
        case TypeRoles.Applicant:
          this.goToApplicant();
          break;
        case TypeRoles.Administrator:
          this.goToAdministrator();
          break;
        case TypeRoles.Offerer:
          this.goToOfferer();
          break;
      }
    }, err => {
      swal('Oops...', 'Hay un error con tu correo y/o contraseña', 'error').catch(swal.noop);
    });
  }

  goToApplicant() {
    console.log("Go To Applicant");
    this.router.navigate(['/HomeApplicant']);
  }
  goToAdministrator() {
    this.router.navigate(['/HomeAdministrator']);
  }
  goToOfferer() {
    this.router.navigate(['/HomeOfferer']);
  }
}
