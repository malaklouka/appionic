import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Annonce } from 'src/app/models/annonce';
import { ApiAnnonceService } from 'src/app/services/api-annonce.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss'],
})
export class AjoutComponent implements OnInit {
  private formAnnonce : FormGroup;
  minDate = new Date().toISOString();
  idU : number ;
  xx: any ; 
  constructor( private formBuilder: FormBuilder, private service: ApiAnnonceService,public datepipe: DatePipe, public toastCtrl: ToastController ) {
   this.formAnnonce = this.formBuilder.group({
      paysD: ['', Validators.required],
      paysA: ['', Validators.required],
      dateD: ['', Validators.required],
      heureD: ['', Validators.required],
      poids: ['', Validators.required],
      prix: ['', Validators.required] ,
      descrip: ['', Validators.nullValidator] 
    });
  }
  ngOnInit() {
    this.idU = parseInt(localStorage.getItem("userID"));
 console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa  : "+this.idU)
 }

  
 save(){  
  let data = this.formAnnonce.value ;
  console.log("value : "+data.dateD); 
  
  if(data.paysD === data.paysA){  
    this.openToast("SVP verifier Pays d'arrivée", "danger");
    return ; 
  } 
   this.xx = this.datepipe.transform(data.dateD, 'yyyy/MM/dd')
  console.log("xxxxx : "+this.xx); 
  let annonce = new Annonce(null, null,data.paysD, data.paysA, this.xx, data.heureD, data.poids, data.prix, data.descrip, this.idU, null);
  console.log("annonce : "+annonce); 
  this.service.addAnnonce(annonce).subscribe(res=>{
    if(res['RESPONSE']=="SUCCESS"){
        this.openToast("Annonce ajoutée avec succes", "primary");
    }
    else{
      this.openToast("Erreur d'ajout", "danger");
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
