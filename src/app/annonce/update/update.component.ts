import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Annonce } from 'src/app/models/annonce';
import { ApiAnnonceService } from 'src/app/services/api-annonce.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  formED : FormGroup; 
  idA:number;
  constructor( private formBuilder: FormBuilder, private service: ApiAnnonceService, 
    public toastCtrl: ToastController, private activateRoute:ActivatedRoute ) {
      this.idA = parseInt(this.activateRoute.snapshot.paramMap.get('id'));
      console.log("id recuuuuu : "+this.idA);
   this.formED = this.formBuilder.group({
      paysD: ['', Validators.required],
      paysA: ['', Validators.required],
      dateD: ['', Validators.required],
      heureD: ['', Validators.required],
      poids: ['', Validators.required],
      prix: ['', Validators.required] ,
      descrip: ['', Validators.nullValidator] 
    });
  }

  ngOnInit(): void {
    this.getInfoAnnoce(); 
  }

  getInfoAnnoce(){
    this.service.infoAnnonce(this.idA).subscribe(ress=>{
      if(ress['RESPONSE']!="ERREUR"){
        let annonce = ress;
        this.formED.patchValue({
          paysD: annonce.paysDep, 
          paysA: annonce.paysDest, 
          dateD: annonce.dateDep, 
          heureD: annonce.heureDep, 
          poids: annonce.poids,   
          prix: annonce.prix, 
          descrip: annonce.descripAnnonce, 
        });
    } 
    }, error=>{
      console.log("erreur");
    })
  }

  save(){  
    let data = this.formED.value ; 
    let annonce = new Annonce(this.idA, null,data.paysD, data.paysA, data.dateD, data.heureD, data.poids, data.prix, data.descrip, 1, null);
    this.service.editAnnonce(annonce).subscribe(res=>{
      if(res['RESPONSE']=="SUCCESS"){
          this.openToast("Annonce modifié avec succes");
      }else{
        this.openToast("Erreur de modification");
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
