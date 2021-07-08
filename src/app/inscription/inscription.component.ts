import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Utilisateur } from '../models/utilisateur';
import { ApiUtilisateurService } from '../services/api-utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {
  private formInscris : FormGroup;

  constructor( private formBuilder: FormBuilder, private service:ApiUtilisateurService, public toastCtrl: ToastController) {
   this.formInscris = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(8), Validators.maxLength(8)]],
      mail: ['', Validators.pattern],
      sexe: ['', Validators.required],
      password: ['', Validators.required] 
    });
  }
  ngOnInit(): void {
    
  }
  save(){  
    let data = this.formInscris.value ; 
    let usrr = new Utilisateur(null, data.nom, data.prenom, data.tel, data.mail, data.sexe, data.password, null )
    this.service.addUser(usrr).subscribe(res=>{
      if(res['RESPONSE']=="SUCCESS"){
          this.openToast("Inscription effectuée avec succes");
          this.formInscris.reset();
      }else{
        this.openToast("Erreur d'Inscription");
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
