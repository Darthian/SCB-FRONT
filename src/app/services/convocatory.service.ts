import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import 'rxjs/Rx';
import { Convocatory  } from '../models/convocatory'

@Injectable()
export class ConvocatoryService extends BaseService {
  
  public entity: String = 'convocatory';
  public pendingApprovePhases: string = 'getPending';
  public statePublished: number = 4;
  public statePending: number = 1;

  post(convocatory: Convocatory) {
    let entity = this.entity;
    return this.basePost(entity+"/create", convocatory);
  }

  getPublished(emailOfferer: string) {
    return this.baseGet(this.entity + "/getByOffererState/" + emailOfferer+"/"+this.statePublished);
  }

  getPendingPublish(emailOfferer: string) {
    return this.baseGet(this.entity + "/getByOffererState/" + emailOfferer+"/"+this.statePending);
  }

  getPendingApprovePhases(emailOfferer: string) {
    return this.baseGet(this.entity + "/" + this.pendingApprovePhases+"/"+emailOfferer);
  }
  
  put(convocatory: Convocatory) {
    let entity = this.entity;
    return this.basePost(entity+"/edit", convocatory);
  }
  
  get(convocatoryId: number) {
    return this.baseGet(this.entity + "/getById/" + convocatoryId);
  }
}
