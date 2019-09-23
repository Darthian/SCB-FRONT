import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import 'rxjs/Rx';

@Injectable()
export class FieldTypeService extends BaseService {

    public entity: String = 'fieldType';

    get() {
        return this.baseGet(this.entity);
    }
}

