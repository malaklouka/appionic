import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiReservationService } from 'src/app/services/api-reservation.service';

@Component({
  selector: 'app-recus',
  templateUrl: './recus.component.html',
  styleUrls: ['./recus.component.scss'],
})
export class RecusComponent implements OnInit {
  reservations:any=[];
  idU : number ; 
  constructor(private service:ApiReservationService,  public toastCtrl: ToastController) { }

  ngOnInit() {
    this.idU = parseInt(localStorage.getItem("userID"));
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa  : "+this.idU)
    this.getDemandesRecus();
  }

  getDemandesRecus(){
    this.service.demandesRecus(this.idU).subscribe(res=>{
      if(res['RESPONSE']!="ERREUR"){
        this.reservations = res;
    }else{
      this.openToast("Aucune Demande Réçus");
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
  
  traiter(id, etat){
    console.log("idddd : "+id);
    console.log("etaatt : "+etat);
    this.service.traiterDemande(id, etat).subscribe(res=>{
      if(res['RESPONSE']!="ERREUR"){
        this.openToast("Réservation traité avec succès");
        this.reservations=[]; this.getDemandesRecus();
    }else{
      this.openToast("Erreur Traitement");
    }
    }, error=>{
      console.log("Erreur");
    })
  }

}
