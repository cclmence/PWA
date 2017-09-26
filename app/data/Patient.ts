/**
 * Created by cleme on 26/09/2017.
 */
import { Person, PersonJSON } from "/Person";

export interface PatientJSON extends PersonJSON {
    numSS : string;
}

export class Patient extends Person{
    constructor (nom, prenom, adress, sexe, dob, private numSS:string) {
        super(nom, prenom, adress, sexe, dob);
    }

    getNumSS():string {
        return this.constructor.numSS;
    }

    toJSON(): PatientJSON {
        return Object.assign({}, super.toJSON(), {numSS:this.getNumSS()});
    }
}/**
 * Created by cleme on 26/09/2017.
 */
