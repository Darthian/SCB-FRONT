import { Component, OnInit } from '@angular/core';
import { ApplicantConvocatoryService } from '../../services/applicant-convocatory.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PlaceService } from '../../services/place-service';
import swal from 'sweetalert2';
import { MaterializeAction } from 'angular2-materialize';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-places-list-convocatory',
  templateUrl: './places-list-convocatory.component.html',
  styleUrls: ['./places-list-convocatory.component.css']
})
export class PlacesListConvocatoryComponent implements OnInit {

  public places: any = [];
  public currentIdPlace: number;
  modalActionsRejectPlace = new EventEmitter<string | MaterializeAction>();

  constructor(private authService: AuthService,
    private router: Router, private applicantConvocatoryService: ApplicantConvocatoryService,
    private placeService: PlaceService) { }

  ngOnInit() {
    this.loadPlaces();
  }

  loadPlaces() {
    let user = this.authService.getCurrentUser();
    this.applicantConvocatoryService.getPlaces(user.email).subscribe(places => {
      console.log(places);
      this.places = places;
    },
      err => {
        console.log(err);
        console.log(err.json());
        swal('Oops...', 'Algo salio mal!', 'error').catch(swal.noop);
      });
  }

  approvePlace(idPlaza: number) {
    this.placeService.approve(idPlaza).subscribe(response => {
      swal('Exito!', 'Se ha aprobado la plaza', 'success').catch(swal.noop);
      this.loadPlaces();
    },
      err => {
        console.log(err);
        console.log(err.json());
        swal('Oops...', 'Algo salio mal!', 'error').catch(swal.noop);
      });
  }

  /*rejectPlace(idPlaza: number) {
    this.placeService.reject(idPlaza).subscribe(response => {
      swal('Exito!', 'Se ha aprobado la plaza', 'success').catch(swal.noop);
    });
  }*/

  openModalRejectPlace(idPlace: number) {
    this.currentIdPlace = idPlace;
    this.modalActionsRejectPlace.emit({ action: "modal", params: ['open'] });
  }

  closeModalRejectPlace() {
    this.modalActionsRejectPlace.emit({ action: "modal", params: ['close'] });
    this.loadPlaces();
  }

}
