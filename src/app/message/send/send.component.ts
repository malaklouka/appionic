import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';  
import { Message } from 'src/app/models/message';
import { ApiMessageService } from 'src/app/services/api-message.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent implements OnInit {
  private formMsg : FormGroup;
  idDest:number ; 
  idU : number ; 
  constructor( private formBuilder: FormBuilder, private service:ApiMessageService, 
    public toastCtrl: ToastController, private activateRoutre:ActivatedRoute) {
      this.idDest = parseInt(this.activateRoutre.snapshot.paramMap.get('id'));
      console.log("id destonateur : "+this.idDest)
   this.formMsg = this.formBuilder.group({
      sujet: ['', Validators.required],
      msg: ['', Validators.required] 
    });
  }
  ngOnInit() {
     this.idU = parseInt(localStorage.getItem("userID"));
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa  : "+this.idU)}


  sendd(){
    let data = this.formMsg.value;
    let message = new Message(null, null, data.sujet, data.msg, this.idU, this.idDest);
    this.service.sendMessage(message).subscribe(res=>{
      if(res['RESPONSE']=="SUCCESS"){
        this.openToast("Message envoyée avec succes");
    }else{
      this.openToast("Erreur d'envoie");
    }
    }, error=>{
      console.log("Erreur");
    })
  }

  async openToast(msg) {  
    const toast = await this.toastCtrl.create({  
      message: msg,  
      duration: 2000  
    });  
    toast.present();  
  }  
}
