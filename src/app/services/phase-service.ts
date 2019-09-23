import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import 'rxjs/Rx';
import { Phase } from '../models/phase'

@Injectable()
export class PhaseService extends BaseService {

  public entity: String = 'phase';

  post(phase: Phase) {
    return this.basePost(this.entity, phase);
  }

  get(idPhase: number) {
    return this.baseGet(this.entity + "/getPhases/" + idPhase);
  }

  getActivePhase(idConvocatory: number){
    return this.baseGet(this.entity + "/getCurrentPhaseByConvocatory/" + idConvocatory);
  }

  put(phase: Phase) {
    return this.basePost(this.entity + "/edit", phase);
  }

  delete(idPhase: number) {
    return this.basePost(this.entity + "/delete/" + idPhase);
  }

  //TODO: ajustar el metodo para que le apunte a la controladora que si traiga todas las fases de 
  //una convocatoria
  getByConvocatory(idConvocatory: number) {
    return this.baseGet(this.entity + "/getPhasesOfConvocatory/" + idConvocatory);
  }

  getFieldsByPhase(idPhase: number) {
    // console.log(this.baseGet("field/getByPhase/" + idPhase))
    return this.baseGet("field/getByPhase/" + idPhase);
  }


  getCurrentPhaseToApply(idConvocatory: number, mail: String) {
    return this.baseGet(this.entity + "/getCurrentPhase/" + idConvocatory + "/" + mail);
  }

  applyToPhase(response) {
    let email = this.authService.getCurrentUser().email;
    response.applicant.email = email;
    return this.basePost("AppPerPhase/asociate", response);
  }

  uploadFile(question, phaseId) {
    var file = question.file.file;
    var name = question.file.name;
    var idConvocatory = "1";
    var idPhase = phaseId;

    let formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('idConvocatory', idConvocatory);
    formData.append('email', this.authService.getCurrentUser().email);
    formData.append('idPhase', idPhase);

    return this.sendFile(formData);
  }

  private sendFile(formData) {
    let headers = this.buildHeaders();
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.SERVER_URL + "convocatory/upload", formData, options)
      .map(res => res.json());
  }

  getApplicantsToApprove(idPhase: number) {
    return this.baseGet("AppPerPhase/applicantsPerPhase/" + idPhase);
  }

  approveApplicant(idAplicantPerPhase: number) {
    return this.basePost("offerer/approvePhase/" + idAplicantPerPhase);
  }

  rejectApplicant(idAplicantPerPhase: number) {
    return this.basePost("offerer/rejectPhase/" + idAplicantPerPhase);
  }

  private buildHeaders() {
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + this.authService.getToken());
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('enctype', 'multipart/form-data');
    return headers;
  }
}

