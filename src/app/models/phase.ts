import { StatePhase } from './state-phase.enum' 
import { Convocatory } from './convocatory';

export class Phase {    
    id: number;
    name: string;
    description: string;    
    startDate: Date;
    endDate: Date;
    startApprovalDate: Date;    
    endApprovalDate: Date;
    convocatory: Convocatory;
}