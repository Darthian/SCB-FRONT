import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Oferrer } from '../models/oferrer';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import 'rxjs/Rx';

@Injectable()
export class OferrerService extends BaseService {

    public entity: String = 'offerer';

    getApproved() {
        return this.baseGet(this.entity + '/approved');
    }

    getDenied() {
        return this.baseGet(this.entity + '/rejected');
    }

    getPending() {
        return this.baseGet(this.entity + '/pending');
    }

    approve(nit: string) {
        let entity = this.entity + "/approve/" + nit;
        return this.basePost(entity);
    }

    reject(nit: string) {
        let entity = this.entity + "/reject/" + nit;
        return this.basePost(entity);
    }

    approveAplicantPhase(id: number) {
        let entity = this.entity + "/approvePhase/" + id;
        return this.basePost(entity);
    }
    
}
