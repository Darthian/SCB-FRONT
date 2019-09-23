import { PlaceState } from './place-state';
import { Convocatory } from './convocatory';

export class Place {
    id: number;
    placeState: PlaceState;
    rejectionCause: String;
    convocatory: Convocatory;
}