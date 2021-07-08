import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiAnnonceService } from 'src/app/services/api-annonce.service';
import { ApiReservationService } from 'src/app/services/api-reservation.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  idA:number;
  annonce:any={};
  constructor(private activateRoute:ActivatedRoute, private service:ApiAnnonceService, 
    private apiReser: ApiReservationService, private toastCtrl:ToastController) { 
    this.idA = parseInt(this.activateRoute.snapshot.paramMap.get('id')); 
    console.log("id recusss : "+this.idA);
  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    this.service.infoAnnonce(this.idA).subscribe(ress=>{
      if(ress['RESPONSE']!="ERREUR"){
        this.annonce = ress;
    } 
    }, error=>{
      console.log("erreur");
    })
  }

  reserver(id){
    console.log("annonce   : "+id);
    this.apiReser.sendDemande(id, 1).subscribe(res=>{
      if(res['RESPONSE']=="SUCCESS"){
          this.openToast("Demande envoyee avec succes", "primary");
      }else{
        this.openToast("Erreur d'envoie", "danger");
      }
    }, error=>{
      console.log("Erreur");
    })
  }

  async openToast(msg, col) {
    const toast = await this.toastCtrl.create({
      message: msg,
      color: col,
      position: 'bottom',
      duration: 1000
    });
    toast.present();
  }
}
