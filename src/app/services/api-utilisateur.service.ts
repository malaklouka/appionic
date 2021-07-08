import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilisateurService {
  urlCnx = "http://127.0.0.1/apis_covalisage_mobile/Utilisateur/";
  constructor(private http: HttpClient) { }

  addUser(usr) {
    return this.http.post(this.urlCnx + "register.php", usr);
  }

  editUser(usr) {
    return this.http.put(this.urlCnx + "update.php", usr);
  }

  getProfilUser(id) {  
    return this.http.get<any>(this.urlCnx + "profil.php?id="+id);
  }

  verifUser(mail, pass){
    let body = {email:mail, password:pass};
    return this.http.post(this.urlCnx+"login.php",  body);
  }
}
