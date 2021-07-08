export class Annonce {
    
    constructor(
        private id?:number ,
        private datePub?: Date,
        private paydD?: string,
        private paysA?: string,
        private dateDep?: Date, 
        private heureDep?: string, 
        private poids?: number,
        private prix?: string, 
        private descrip?: string, 
        private user?: number, 
        private etat?: string
    ){}
}
