import { ConvocatoryType } from './convocatory-type';
import { Oferrer } from './oferrer';
import { ConvocatoryState } from './convocatory-state';

export class Convocatory {
    id: number;
    name: string;
    convocatoryType: ConvocatoryType;
    numberBeneficiaries: number;
    description: string;
    offerer: Oferrer;
    resultDate: Date;
    convocatoryState: ConvocatoryState;
}
