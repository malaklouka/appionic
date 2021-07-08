import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAnnonceService {
  urlCnx = "http://127.0.0.1/apis_covalisage_mobile/Annonce/";
  constructor(private http: HttpClient) { }

  addAnnonce(annonce) {
    return this.http.post(this.urlCnx + "ajout.php", annonce);
  }

  editAnnonce(annonce) {
    return this.http.put(this.urlCnx + "update.php", annonce);
  }

  allAnnonces(dep, dest, date) { // recherche
    let body = { depart:dep, destination:dest, dateee: date };
    return this.http.post(this.urlCnx + "annonces.php", body);
  }

  annonceByUser(idUser) {  
    return this.http.get(this.urlCnx + "mesAnonnces.php?id="+idUser);
  }
 
  infoAnnonce(codeAnnonce) {
    return this.http.get<any>(this.urlCnx + "show.php?id="+ codeAnnonce);
  }

  deleteAnnonce(codeAnnonce) {
    return this.http.delete(this.urlCnx + "delete.php?id="+ codeAnnonce);
  }


  // add, edit, delete, all, mesAnnonces
}
