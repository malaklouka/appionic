export class Utilisateur {

    constructor(
        private id?: number,
        private nom?: string, 
        private prenom?: string,
        private tel?: number, 
        private email?: string, 
        private sexe?: string, 
        private password?: string,
        private etat?: string
    ){}
}
