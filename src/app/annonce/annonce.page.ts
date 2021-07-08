import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiAnnonceService } from '../services/api-annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {
  annonces:any=[];
  idU : number ; 
  constructor(private service:ApiAnnonceService,  public toastCtrl: ToastController) { }

  ngOnInit() {
    this.idU = parseInt(localStorage.getItem("userID"));
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa  : "+this.idU)
    this.getAnnoncesUser();
 }

  getAnnoncesUser(){
    this.service.annonceByUser(this.idU).subscribe(res=>{
      if(res['RESPONSE']!="ERREUR"){
        this.annonces = res;
    }else{
      this.openToast("Aucune Annonce Trouvée");
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
    console.log("id annonce : "+id);
    this.service.deleteAnnonce(id).subscribe(res=>{
      if(res['RESPONSE']!="ERREUR"){
        this.openToast("Annonce Supprimée avec Succès");
        this.annonces =[]; this.getAnnoncesUser();

    }else{
      this.openToast("Aucune Suppression");
    }
    }, error=>{
      console.log("Erreur");
    })
  }
}
