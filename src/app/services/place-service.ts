import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import { RejectPlace } from '../models/reject-place';
import 'rxjs/Rx';

@Injectable()
export class PlaceService extends BaseService {

  public entity: String = 'applicant';

  approve(idPlace: number) {    
    return this.basePost(this.entity+"/acceptConvocatory/"+idPlace);
  }

  reject(rejectPlace: RejectPlace) {
    let entity = this.entity;
    return this.basePost(entity+"/rejectPlace", rejectPlace);
  }
}