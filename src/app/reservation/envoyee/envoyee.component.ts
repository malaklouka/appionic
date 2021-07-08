import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiReservationService } from 'src/app/services/api-reservation.service';

@Component({
  selector: 'app-envoyee',
  templateUrl: './envoyee.component.html',
  styleUrls: ['./envoyee.component.scss'],
})
export class EnvoyeeComponent implements OnInit {
  reservations:any=[];
  idU : number ; 
  constructor(private service:ApiReservationService,  public toastCtrl: ToastController) { }

  ngOnInit() {
    this.idU = parseInt(localStorage.getItem("userID"));
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa  : "+this.idU)
    this.getDemandesEnvoyee();
  }

  getDemandesEnvoyee(){
    this.service.demandesEnvoyee(this.idU).subscribe(res=>{
      if(res['RESPONSE']!="ERREUR"){
        this.reservations = res;
    }else{
      this.openToast("Aucune Demande Envoyée");
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
