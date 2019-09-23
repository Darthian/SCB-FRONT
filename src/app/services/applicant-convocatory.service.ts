import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import 'rxjs/Rx';
import { Convocatory  } from '../models/convocatory'

@Injectable()
export class ApplicantConvocatoryService extends BaseService {

 public entity: String = 'applicant';

  /*post(convocatory: Convocatory) {
    let entity = this.entity;
    return this.basePost(entity+"/create", convocatory);
  }  aplicar..*/

  getPostulations(emailApplicant: string) {
    return this.baseGet(this.entity + "/postulations/" + emailApplicant);
  }

  getPlaces(emailApplicant: string) {
    return this.baseGet(this.entity + "/places/" + emailApplicant);
  }

  getNotAppliedConvocatories(emailApplicant: string) {
    return this.baseGet(this.entity + "/notAppliedConvocatories/" + emailApplicant);
  }

}
