import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiMessageService } from '../services/api-message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  messages:any=[];
  idU : number ; 
  constructor(private service:ApiMessageService,  public toastCtrl: ToastController, 
    private alertController : AlertController) { }

  ngOnInit() { 
    this.idU = parseInt(localStorage.getItem("userID"));
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa  : "+this.idU)

    this.getMessageUser();
  }

  getMessageUser(){
    this.service.messageByUser(this.idU).subscribe(res=>{
      if(res['RESPONSE']!="ERREUR"){
        this.messages = res;
    }else{
      this.openToast("Aucun Message Réçus");
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

  delete(id){
    this.service.deleteMessage(id).subscribe(res=>{
      if(res['RESPONSE']!="ERREUR"){
        this.openToast("Message supprimée avec succès");
        this.messages =[]; this.getMessageUser();
    }else{
      this.openToast("Erreur Suppression");
    }
    }, error=>{
      console.log("Erreur");
    }) 
  }

  async presentAlertMultipleButtons(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Message',
      subHeader: 'Message Réçus',
      message: msg,
      buttons: ['Fermer']
    });

    await alert.present();
  }
}
