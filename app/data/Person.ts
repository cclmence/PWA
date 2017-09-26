/**
 * Created by cleme on 26/09/2017.
 */
interface PersonJSON {
    nom:string,
    prenom:string,
    adress:string,
    sexe:string,
    dob:string
}

abstract class Person {
    constructor(private nom:string,
                private prenom:string,
                private adress:string,
                private sexe:string,
                private dob:string){
        this.nom = nom;
        this.prenom = prenom;
        this.adress = adress;
        this.sexe = sexe;
        this.dob = dob;
    }

    getNom():string {
        return this.constructor.nom;
    }

    getPrenom():string {
        return this.constructor.prenom;
    }

    getAdress():string {
        return this.constructor.adress;
    }

    getSexe():string {
        return this.constructor.sexe;
    }

    getDob():string {
        return this.constructor.dob;
    }

    toJSON():PersonJSON{
        return {nom:this.getNom();
        return {prenom:this.getPrenom();
        return {adress:this.getAdress();
        return {sexe:this.getSexe();
        return {dob:this.getDob();
        };
    }
}