import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import 'rxjs/Rx';

@Injectable()
export class PostulationService extends BaseService {
  
  public entity: String = 'postulation';
 
//TODO: Rest services: Postulation
// post
// get/idConvocatory -> trae los postulados de esa convocatoria

  post() {
    let entity = this.entity;
    return this.basePost(entity);
  }

  get(idConvocatory : number) {
    return this.baseGet(this.entity + "/" + idConvocatory);
  }
}
