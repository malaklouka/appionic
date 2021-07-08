export class Reservation {

    constructor(
        private id?: number, 
        private date?: Date, 
        private etat?: string, 
        private commentaire?: string,
        private annonce?: number, 
        private user?: number
    ){}
}
