import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Utilisateur } from '../models/utilisateur';
import { ApiUtilisateurService } from '../services/api-utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  private formProfil : FormGroup; 
  idU : number ; 
  constructor( private formBuilder: FormBuilder, private service:ApiUtilisateurService, public toastCtrl: ToastController) {
   this.formProfil = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      mail: ['', Validators.required],
      sexe: ['', Validators.required],
      password: ['', Validators.required] 
    });
  }

  ngOnInit(): void {
    this.idU = parseInt(localStorage.getItem("userID"));
    this.service.getProfilUser(this.idU).subscribe(result=>{
       let user = result;
      this.formProfil.patchValue({
        nom: user.nomUser, 
        prenom: user.prenomUser, 
        tel: user.telUser, 
        mail: user.mailUser, 
        sexe: user.sexeUser, 
        password: user.passwordUser, 
      });
    }, error=>{
      console.log("Erreur");
    })
  }

  save(){  
    let data = this.formProfil.value ; 
    let usrr = new Utilisateur(1, data.nom, data.prenom, data.tel, data.mail, data.sexe, data.password, null )
    this.service.editUser(usrr).subscribe(res=>{
      if(res['RESPONSE']=="SUCCESS"){
          this.openToast("Modification effectuée avec succes");
      }else{
        this.openToast("Erreur dde modification");
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
