import { MaterializeModule, MaterializeDirective } from 'angular2-materialize';
import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { TypeRoles } from './models/type-roles.enum'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: User;
  title = 'ARTSOFT';
  isApplicant : boolean = false;
  isAdmin : boolean = false;
  isOfferer : boolean = false;
  hideWelcome: boolean = false;//TODO: implementada por que en el HTML se hace referencia, debe estar?

  sidenavActions = new EventEmitter<any>();
  sidenavParams = [];
  
  public showSidenav(): void {
    this.sidenavParams = ['show'];
    this.sidenavActions.emit('sideNav');
  }

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {    
    this.user = this.userService.getCurrentUser();    
    this.setRole();
  }

  logout() {
    this.userService.removeCurrentUser();
      window.location.reload();
      this.router.navigate(['/']); 

  }

  setRole() {
    if(this.user != null && this.user.role != null) {
      switch(this.user.role) {
        case TypeRoles.Administrator:{
          this.isAdmin = true;
          break;
        }
        case TypeRoles.Applicant:{
          this.isApplicant = true;
          break;
        }
        case TypeRoles.Offerer:{
          this.isOfferer = true;
          break;
        }
      }
    }
  }

}
