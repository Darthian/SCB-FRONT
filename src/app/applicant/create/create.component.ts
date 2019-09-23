import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import swal from 'sweetalert2';

@Component({
  selector: 'applicant-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  resolved(captchaResponse: string) {
  }
  
  selectedOption = "";
  selectOptions = [];
  firstName = "";
  secondName = "";
  firstLastName = "";
  secondLastName = "";
  address = "";
  documentType = "1";
  documentNumber = "";
  email = "";
  cellphone = "";
  telephone = "";
  password = "";
  password2 = "";
  captcha = "";
  headers = undefined;

  firstName_tooltip = undefined;
  secondName_tooltip = undefined;
  firstLastName_tooltip = undefined;
  secondLastName_tooltip = undefined;
  address_tooltip = undefined;
  documentType_tooltip = undefined;
  documentNumber_tooltip = undefined;
  email_tooltip = undefined;
  cellphone_tooltip = undefined;
  telephone_tooltip = undefined;
  password_tooltip = undefined;
  password2_tooltip = undefined;
 
  constructor(private http: Http) { 
    this.headers = new Headers();
    
    window.setTimeout(()=>{
      this.selectOptions = [
        {value:1,name:"CC"},
        {value:2,name:"TI"},
        {value:3,name:"CE"}
      ]
    },100);
  }
  
  ngOnInit() {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', environment.SERVER_URL);
    // this.headers.append('Access-Control-Allow-Origin', environment.SERVER_LOCAL);
    this.headers.append('Content-Type', 'application/json');
  }

  registerSolicitant() {
    let data = {
      "firstName": this.firstName,
      "secondName": this.secondName,
      "firstLastName": this.firstLastName,
      "secondLastName": this.secondLastName,
      "address": this.address,
      "documentType": {'id':this.documentType},
      "documentNumber": this.documentNumber,
      "email": this.email,
      "cellphone": this.cellphone,
      "telephone": this.telephone,
      "password": this.password,
      "password2": this.password2,
      "captcha": this.captcha
    }

    let errores = false;
    if(this.password2 == ""){
      this.password2_tooltip = [];
      this.password2_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }
    
    if(this.firstName == ""){
      this.firstName_tooltip = [];
      this.firstName_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }
    
    if(this.password == ""){
      this.password_tooltip = [];
      this.password_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }

    if(this.email == ""){
      this.email_tooltip = [];
      this.email_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }
    
    if(this.documentNumber == ""){
      this.documentNumber_tooltip = [];
      this.documentNumber_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }

    if(this.firstLastName == ""){
      this.firstLastName_tooltip = [];
      this.firstLastName_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }
    
    if(this.password != "" && this.password2 != ""){

      if(this.password.length < 7 ){
        this.password_tooltip = [];
        this.password_tooltip['error'] = "La contraseña debe tener mas de 8 caracteres";
        errores = true;
      }

      if(this.password2.length < 7 ){
        this.password2_tooltip = [];
        this.password2_tooltip['error'] = "La contraseña debe tener mas de 8 caracteres";
        errores = true;
      }

      if(this.password != this.password2 ){
        swal('Oops...', 'Las contraseñas ingresadas no coinciden', 'error').catch(swal.noop);
        errores = true;
      }
    }

    if(this.captcha == ""){
      swal('Oops...', 'Confirma que no eres un robot', 'error').catch(swal.noop);
      errores = true;
    }

    if(!errores){
      this.http.post(environment.SERVER_URL + 'applicant', 
      // this.http.post(environment.SERVER_LOCAL + 'applicant', 
          JSON.stringify(data),
          {headers:this.headers})
      .map((res: Response) => res.json())
      .subscribe(
        (response) => {
          swal('Exito!', 'Se ha registrado tu usuario, revisa tu bandeja de correo electronico para completar la validacion', 'success').catch(swal.noop);
        },
        (err) => {
          let errores = err.json();
          if(err['status'] == 400){
            swal('Oops...', 'Algo salio mal!', 'error').catch(swal.noop);
          }else{
            for (var variable in errores) {
              if (errores.hasOwnProperty(variable)) {
                var element = errores[variable];
                switch(variable) { 
                  case "firstName": { 
                    this.firstName_tooltip = [];
                    this.firstName_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "secondName": { 
                    this.secondName_tooltip = [];
                    this.secondName_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "firstLastName": { 
                    this.firstLastName_tooltip = [];
                    this.firstLastName_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "secondLastName": { 
                    this.secondLastName_tooltip = [];
                    this.secondLastName_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "address": { 
                    this.address_tooltip = [];
                    this.address_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "documentType": { 
                    this.documentType_tooltip = [];
                    this.documentType_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "documentNumber": { 
                    this.documentNumber_tooltip = [];
                    this.documentNumber_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "cellphone": { 
                    this.cellphone_tooltip = [];
                    this.cellphone_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "telephone": { 
                    this.telephone_tooltip = [];
                    this.telephone_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "email": { 
                    this.email_tooltip = [];
                    this.email_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "password": { 
                    this.password_tooltip = [];
                    this.password_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "password2": { 
                    this.password2_tooltip = [];
                    this.password2_tooltip['error'] = errores[variable];
                    break; 
                  } 
                } 
                var att = document.createAttribute("data-tooltip");
                att.value = errores[variable];
                document.getElementById(variable).setAttributeNode(att);
                document.getElementById(variable).classList.add("invalid");
              }
            }
          }
          // [materializeParams]="tooltip"
        },
        () => {
          /* this function is executed when the observable ends (completes) its stream */
        }
      );
    }
    
  }
}
