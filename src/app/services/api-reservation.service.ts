import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiReservationService {

  urlCnx = "http://127.0.0.1/apis_covalisage_mobile/Reservation/";
  constructor(private http: HttpClient) { }

  sendDemande(annonce, user){
    let body = { annonce: annonce, user: user };
    return this.http.post(this.urlCnx + "sendDemande.php", body);
  }

  demandesRecus(id) {
    return this.http.get(this.urlCnx + "recus.php?id="+id);
  }

  infoDemande(id) {
    return this.http.get(this.urlCnx + "info.php?id="+id);
  }

  evaluerUser(id, note){
    let body = {note : note, user :id};
    return  this.http.post(this.urlCnx+"evaluer.php", body );
  }

  demandesEnvoyee(id) {
    return this.http.get(this.urlCnx + "envoyee.php?id="+id);
  }

  traiterDemande(idDmd, etat) {
    let body = { idDmnd: idDmd, etat: etat };
    return this.http.post(this.urlCnx + "traiter.php", body);
  }
}


    // demandesRecus, demandesEnvoyee , traiterDemande()
