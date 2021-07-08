import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { ApiUtilisateurService } from '../services/api-utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup;

  constructor( private formBuilder: FormBuilder, private service:ApiUtilisateurService, 
    public toastCtrl: ToastController,private navCtrl:NavController) {
   this.formLogin = this.formBuilder.group({
    mail: ['', Validators.required],
    password	: ['', Validators.required] 
    });
  }

  ngOnInit(): void {
  }

  login(){  
    let data = this.formLogin.value;
    this.service.verifUser(data.mail, data.password).subscribe(ress=>{
      if(ress['RESPONSE']!="ERREUR"){

        console.log("etat_user : "+ress['etat_user']); 
        if(ress['etat_user'] =="Active"){
          this.navCtrl.navigateRoot('/home');
          localStorage.setItem("userID", ress['idUser']);
        }else{
          this.openToast("Votre compte n'a pas encore activé");
        } 
      }else{
        this.openToast("SVP verifier votre email et mot de passe");
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
