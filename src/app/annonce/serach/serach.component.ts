import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
 
@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.scss'],
})
export class SerachComponent implements OnInit {
  private formCh : FormGroup;
  minDate = new Date().toISOString();
  constructor( private formBuilder: FormBuilder, public toastCtrl: ToastController, private navCtrl:NavController ) {
   this.formCh = this.formBuilder.group({
      paysD: ['', Validators.required],
      paysA: ['', Validators.required],
      dateD: ['', Validators.required] 
    });
  }

  ngOnInit() {}

  search(){
    let data = this.formCh.value;
    if(data.paysD === data.paysA){
      this.openToast("SVP verifier Pays d'arrivée", "danger");
      return ; 
    }else {
    localStorage.setItem("depart", data.paysD );
    localStorage.setItem("arrivee", data.paysA);
    localStorage.setItem("date", data.dateD);
    
    this.navCtrl.navigateRoot(['/annonce/all']);
    }
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
