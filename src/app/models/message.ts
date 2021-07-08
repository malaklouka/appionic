export class Message {

    constructor(
        private id?: number, 
        private dateEnvoie?: Date, 
        private sujet?: string, 
        private contenue?: string, 
        private expediteur?: number, 
        private destinateur?: number
    ){}
}
