import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import 'rxjs/Rx';

@Injectable()
export class ConvocatoryTypeService  extends BaseService {
  
      public entity: String = 'convocatoryType';
  
      get() {
          return this.baseGet(this.entity);
      }
}
  
