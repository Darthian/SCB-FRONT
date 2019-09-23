import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import 'rxjs/Rx';
import { Convocatory } from '../models/convocatory'
import { FieldModel } from '../models/field.model'

@Injectable()
export class InputFieldsService extends BaseService {

  public entity: String = 'field';
  //   public pendingApprovePhases: string = 'getByPendingPhases';
  //   public statePublished: number = 4;
  //   public statePending: number = 1;

  post(field: FieldModel) {
    let entity = this.entity;
    return this.basePost(entity + "/create", field.fieldStructure);
  }
  
  update(field: FieldModel) {
    let entity = this.entity;
    return this.basePost(entity + "/edit", field.fieldStructure);
  }

  delete(id: string) {
    let entity = this.entity;
    return this.basePost(entity + "/delete/" + id);
  }

  //   getPublished(emailOfferer: string) {
  //     return this.baseGet(this.entity + "/getByOffererState/" + emailOfferer+"/"+this.statePublished);
  //   }

  //   getPendingPublish(emailOfferer: string) {
  //     return this.baseGet(this.entity + "/getByOffererState/" + emailOfferer+"/"+this.statePending);
  //   }

  //   getPendingApprovePhases(emailOfferer: string) {
  //     return this.baseGet(this.entity + "/" + this.pendingApprovePhases+"/"+emailOfferer);
  //   }

  //   put(convocatory: Convocatory) {
  //     let entity = this.entity;
  //     return this.basePost(entity+"/edit", convocatory);
  //   }

  //   get(convocatoryId: number) {
  //     return this.baseGet(this.entity + "/getById/" + convocatoryId);
  //   }
}
