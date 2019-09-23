import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { MaterializeDirective,MaterializeAction } from "angular2-materialize";
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import swal from 'sweetalert2';

@Component({
  selector: 'offerer-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  name = "";
  legalRepresentative = "";
  email = "";
  nit = "";
  address = "";
  telephone = "";
  password = "";
  password2 = "";
  captcha = "";
  headers = undefined;
  
  name_tooltip = undefined;
  legalRepresentative_tooltip = undefined;
  email_tooltip = undefined;
  nit_tooltip = undefined;
  address_tooltip = undefined;
  telephone_tooltip = undefined;
  password_tooltip = undefined;
  password2_tooltip = undefined;

  constructor(private http: Http) { 
    this.headers = new Headers();
  }
  
  ngOnInit() {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', environment.SERVER_URL);
    this.headers.append('Content-Type', 'application/json');
  }

  registerOfferer() {
    let data = {
      "name": this.name,
      "legalRepresentative": this.legalRepresentative,
      "email": this.email,
      "nit": this.nit,
      "address": this.address,
      "telephone": this.telephone,
      "password": this.password,
      "password2": this.password2,
      "captcha": this.captcha
    }

    let errores = false;
    
    if(this.name == ""){
      this.name_tooltip = [];
      this.name_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }
    if(this.nit == ""){
      this.nit_tooltip = [];
      this.nit_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }
    if(this.email == ""){
      this.email_tooltip = [];
      this.email_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }
  
    if(this.password == ""){
      this.password_tooltip = [];
      this.password_tooltip['error'] = "Este campo es obligatorio";
      errores = true;
    }
    
    if(this.password2 == ""){
      this.password2_tooltip = [];
      this.password2_tooltip['error'] = "Este campo es obligatorio";
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
      this.http.post(environment.SERVER_URL + 'offerer', 
          JSON.stringify(data),
          {headers:this.headers})
      .map((res: Response) => res.json())
      .subscribe(
        (response) => {
          swal('Exito!', 'Se ha registrado tu usuario, se iniciara el proceso de validacion', 'success').catch(swal.noop);
        },
        (err) => {
          let errores = err.json();
          if(err['status'] == 400){
            swal('Oops...', 'Algo salio mal!', 'error').catch(swal.noop);
          }else{
            let errores = err.json();
            for (var variable in errores) {
              if (errores.hasOwnProperty(variable)) {
                var element = errores[variable];
                switch(variable) { 
                  case "name": { 
                    this.name_tooltip = [];
                    this.name_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "legalRepresentative": { 
                    this.legalRepresentative_tooltip = [];
                    this.legalRepresentative_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "email": { 
                    this.email_tooltip = [];
                    this.email_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "nit": { 
                    this.nit_tooltip = [];
                    this.nit_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "address": { 
                    this.address_tooltip = [];
                    this.address_tooltip['error'] = errores[variable];
                    break; 
                  } 
                  case "telephone": { 
                    this.telephone_tooltip = [];
                    this.telephone_tooltip['error'] = errores[variable];
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
        },
        () => {
        }
      );
    }
  }
  
  resolved(captchaResponse: string) {
  }

}
