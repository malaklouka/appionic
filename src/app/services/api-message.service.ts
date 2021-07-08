import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMessageService {
  urlCnx = "http://127.0.0.1/apis_covalisage_mobile/Message/";
  constructor(private http:HttpClient) { }

  sendMessage(msg){
    return this.http.post(this.urlCnx+"send.php", msg);
  }

  messageByUser(id){
    return this.http.get(this.urlCnx+"mesMessages.php?x="+id);
  }

  deleteMessage(id){
    return this.http.delete(this.urlCnx+"delete.php?x="+id);
  }
}
