import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Oferrer } from '../models/oferrer';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import 'rxjs/Rx';

@Injectable()
//export class FieldService extends BaseService {
export class FieldService {
    public entity: String = 'field/getByPhase/';
    constructor(protected http: Http) { }
    getFields(id) {
        let headers = this.buildHeader('solicitanteAplicarTest@artsoft.com', 'artsoft');
        let options = new RequestOptions({ headers: headers });

        //let questionFields: string = '[{"id":1,"name":"Correo","field_type_id":1,"required":true,"validation":null},{"id":2,"name":"Número Mayor","field_type_id":2,"required":false,"validation":{"id":1,"field_id":2,"field_type_validation_id":1,"value":10,"error_msg":"Número debe ser mayor que 10"}},{"id":3,"name":"Número Menor","field_type_id":2,"required":false,"validation":{"id":2,"field_id":3,"field_type_validation_id":2,"value":10,"error_msg":"Número debe ser menor que "}},{"id":4,"name":"Número Entre","field_type_id":2,"required":true,"validation":{"id":3,"field_id":4,"field_type_validation_id":3,"value":"10|20","error_msg":"Número debe ser entre 10 y 20 "}},{"id":5,"name":"Número Entre","field_type_id":2,"required":true,"validation":{"id":4,"field_id":5,"field_type_validation_id":3,"value":"10|20","error_msg":"Número debe ser entre 10 y 20 "}},{"id":6,"name":"Número Célular","field_type_id":2,"required":true,"validation":{"id":5,"field_id":6,"field_type_validation_id":4,"value":null,"error_msg":"Número debe ser célular"}},{"id":7,"name":"Texto corto - Max","field_type_id":3,"required":false,"validation":{"id":6,"field_id":7,"field_type_validation_id":5,"value":15,"error_msg":"Texto debe ser maximo 15"}},{"id":8,"name":"Texto corto - Min","field_type_id":3,"required":false,"validation":{"id":7,"field_id":8,"field_type_validation_id":6,"value":5,"error_msg":"Texto debe ser mínimo 15"}},{"id":9,"name":"Texto Largo - Max","field_type_id":4,"required":false,"validation":{"id":8,"field_id":9,"field_type_validation_id":5,"value":15,"error_msg":"Texto debe ser maximo 15"}},{"id":10,"name":"Texto Largo - Min","field_type_id":4,"required":true,"validation":{"id":9,"field_id":10,"field_type_validation_id":6,"value":5,"error_msg":"Texto debe ser mínimo 15"}},{"id":11,"name":"Archivo","field_type_id":5,"required":true,"validation":{"id":10,"field_id":11,"field_type_validation_id":7,"value":"jpg","error_msg":"El archivo debe tener formato jpg"}},{"id":22,"name":"Calendario - Mayor","field_type_id":6,"required":true,"validation":{"id":11,"field_id":12,"field_type_validation_id":10,"value":"2017-01-25","error_msg":"La fecha debe ser mayor a 2017-01-25"}},{"id":13,"name":"Calendario - Menor","field_type_id":6,"required":false,"validation":{"id":12,"field_id":13,"field_type_validation_id":11,"value":"2017-10-25","error_msg":"La fecha debe ser menor a 2017-01-25"}},{"id":14,"name":"Calendario - Entre","field_type_id":6,"required":false,"validation":{"id":13,"field_id":14,"field_type_validation_id":12,"value":"2017-01-25|2017-10-25","error_msg":"La fecha debe ser entre 2017-01-25 y 2017-10-25"}},{"id":15,"name":"URL","field_type_id":7,"required":true,"validation":null},{"id":16,"name":"Tiempo transcurrido - Apartir de(Mes)","field_type_id":8,"required":true,"validation":{"id":14,"field_id":16,"field_type_validation_id":13,"value":"2017-01-25|month","error_msg":"La fecha debe ser mayor a  2017-01-25"}},{"id":17,"name":"Tiempo transcurrido - Apartir de(Año)","field_type_id":8,"required":true,"validation":{"id":14,"field_id":16,"field_type_validation_id":13,"value":"2017-01-25|year","error_msg":"La fecha debe ser mayor a  2016-01-25"}}]';
        //let questionFields: string = '[{"id":1,"name":"Correo","field_type_id":1,"required":true,"validation":null},{"id":2,"name":"Número Mayor","field_type_id":2,"required":false,"validation":{"id":1,"field_id":2,"field_type_validation_id":1,"value":10,"error_msg":"Número debe ser mayor que 10"}}]';
        //let fields = JSON.parse(questionFields);
        //return fields;

        return this.http.get(environment.SERVER_URL + this.entity + id, options)
            .map(res => res.json());
        
    }

    buildHeader(email: string, password: string) {
        let base64 = btoa(email + ':' + password);

        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + base64);
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', environment.SERVER_URL);
        // headers.append('Access-Control-Allow-Origin', environment.SERVER_LOCAL);

        return headers;
    }
}
