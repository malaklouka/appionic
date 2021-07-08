import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  urlCnx = "http://127.0.0.1/apis_covalisage_mobile/Reclamation/";
  constructor(private http:HttpClient) { }

  sendMessage(msg){
    return this.http.post(this.urlCnx+"sendd.php", msg);
  }
}

