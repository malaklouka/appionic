import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';  
import { Reclamation } from '../models/reclamation';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss'],
})
export class ReclamationComponent implements OnInit {
  private formMsg : FormGroup; 
  idU : number ; 
  constructor( private formBuilder: FormBuilder, private service:ReclamationService, 
    public toastCtrl: ToastController, private activateRoutre:ActivatedRoute) {  
   this.formMsg = this.formBuilder.group({
      sujet: ['', Validators.required],
      msg: ['', Validators.required] 
    });
  }
  ngOnInit() {
     this.idU = parseInt(localStorage.getItem("userID")); 
  }

  sendd(){
    let data = this.formMsg.value;
    let rec = new Reclamation(data.sujet, data.msg, this.idU);
    this.service.sendMessage(rec).subscribe(res=>{
      if(res['RESPONSE']=="SUCCESS"){
        this.openToast("Reclamation envoyée avec succes");
        this.formMsg.reset(); 
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