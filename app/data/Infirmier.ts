/**
 * Created by cleme on 26/09/2017.
 */
import { Person, PersonJSON } from "/Person";

export interface InfirmierJSON extends PersonJSON {
    id : string;
}

export class Infirmier extends Person{
    constructor (nom, prenom, adress, sexe, dob, private id:string) {
      super(nom, prenom, adress, sexe, dob);
    }

    getID():string {
        return this.constructor.id;
    }

    toJSON(): InfirmierJSON {
        return Object.assign({}, super.toJSON(), {id:this.getID()});
    }
}