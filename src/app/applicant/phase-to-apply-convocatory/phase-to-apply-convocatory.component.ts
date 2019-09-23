
import { Component, OnInit } from '@angular/core';
import { MaterializeDirective, MaterializeAction } from "angular2-materialize";
import { EventEmitter } from '@angular/core';
import { Convocatory } from '../../models/convocatory';
import { StatePhaseAndAplicant } from '../../models/state-phase-and-aplicant';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ConvocatoryService } from '../../services/convocatory.service';
import { PhaseService } from '../../services/phase-service';
import { ConvocatoryType } from '../../models/convocatory-type';
import { Location } from '@angular/common';
import { ConvocatoryState } from '../../models/convocatory-state';
import { Phase } from '../../models/phase';
import { Router } from '@angular/router';
declare var jQuery: any;
declare var $: any;
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-phase-to-apply-convocatory',
  templateUrl: './phase-to-apply-convocatory.component.html',
  styleUrls: ['./phase-to-apply-convocatory.component.css']
})
export class PhaseToApplyConvocatoryComponent implements OnInit {
  actions1 = new EventEmitter<string | MaterializeAction>();
  convocatory: Convocatory;
  phase: Phase;
  currentState: String;
  statePendingData: String = 'PendienteRegistroDatos';
  statePending: String = 'Pendiente';
  stateApproved: String = 'Aprobado';
  stateRejected: String = 'Rechazado';
  stateRejectedOtherPhase: String = 'RechazadoFaseAnterior';
  isEnabledPhase: boolean = false;
  statePhaseAndAplicant: StatePhaseAndAplicant;

  constructor(private location: Location,
    private authService: AuthService,
    private route: ActivatedRoute, private convocatoryService: ConvocatoryService,
    private phaseService: PhaseService, private router: Router) {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.convocatoryService.get(+params.get('id'))) //El + es porque el recibe todo en string, con + lo pasa a numero
      .subscribe(convocatory => {
        console.log(convocatory);
        this.convocatory = convocatory;
        this.loadCurrentPhase();
      });
  }

  ngOnInit() {
    this.habilitarAcordeon();
  }

  goBack(): void {
    this.location.back();
  }

  loadCurrentPhase() {

    let user = this.authService.getCurrentUser();
    this.phaseService.getCurrentPhaseToApply(this.convocatory.id, user.email)
      .subscribe(statePhaseAndAplicant => {
        this.statePhaseAndAplicant = statePhaseAndAplicant;
        console.log(statePhaseAndAplicant);
        this.currentState = statePhaseAndAplicant.state;
        this.phase = statePhaseAndAplicant.phase;

        this.habilitarFase();
        this.habilitarAcordeon();
      });
  }

  goToApply() {
    //TODO: Sebastian aca pone la navegacion para ir a sus campos.
    //O solo se quitaria y se llamaria un metodo para aplicar a esta convocatoria.
    //El parametro q quiera.. convocatoria o fase
    console.log(this.phase.id);
    this.router.navigate(['/form/' + this.phase.id]);
  }

  ngAfterViewInit() {
    this.habilitarAcordeon();
  }



  habilitarAcordeon() {
    $('.collapsible').collapsible({
      accordion: true
    });
  }

  habilitarFase() {
    this.isEnabledPhase = false;
    if (this.phase !== null && this.phase !== undefined) {
      this.isEnabledPhase = true;
    }
  }









  //Tests:
  habilitarCerradoConvocatoria() {
    this.currentState = null;
    this.phase = null;
  }

  habilitarAplicar() {
    this.crearFaseDummy();
    this.currentState = 'PendienteRegistroDatos';
  }

  habilitarPendiente() {
    this.crearFaseDummy();
    this.currentState = 'Pendiente';
  }

  habilitarAprobado() {
    this.crearFaseDummy();
    this.currentState = 'Aprobado';
  }

  habilitarRechazado() {
    this.crearFaseDummy();
    this.currentState = 'Rechazado';
  }

  habilitarRechazadoDeFaseAnterior() {
    this.crearFaseDummy();
    this.currentState = 'RechazadoFaseAnterior';
  }


  crearFaseDummy() {
    this.phase = new Phase();
    this.phase.id = 1;
    this.phase.name = "fase inscripcion";
    this.phase.description = "desc";
    this.phase.startDate = new Date(2017, 5, 2);
    this.phase.endDate = new Date(2017, 5, 8);
    this.phase.startApprovalDate = new Date(2015, 8, 9);
    this.phase.endApprovalDate = new Date(2016, 8, 9);
    this.phase.convocatory = this.convocatory;
  }


  /*   this.habilitarCerradoConvocatoria();
  this.habilitarAplicar();
  this.habilitarPendiente();
  this.habilitarAprobado();
  this.habilitarRechazado();
  this.habilitarRechazadoDeFaseAnterior();    
    */

}
