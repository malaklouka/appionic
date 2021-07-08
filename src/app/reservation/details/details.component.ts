import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiReservationService } from 'src/app/services/api-reservation.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  idD: number ;
  infoDMD:any={};
  note:string ;  
  constructor(private avticateRoute :ActivatedRoute, private service:ApiReservationService, private toastCtrl: ToastController) { 
    this.idD = parseInt(this.avticateRoute.snapshot.paramMap.get('id'));
  
  }

  ngOnInit() {
    console.log("idddd : "+this.idD);
    this.service.infoDemande(this.idD).subscribe(data=>{
      if(data['RESPONSE']!="ERREUR"){
        console.log("icccccccccccccccccccccccccccccccccc "+data['paysDep']);
          this.infoDMD = data ; 
      }
    }, error=>{
      console.log("Erreur");
    })
  }

  onRateChange(event) {
    console.log('Your rate:', event);
  }

  save(id){
    console.log("userrrrrrrrrrrrrrrrrrrrrr : "+ id);
    console.log("noteee : "+ this.note);
    let n = this.infoDMD['note_user'];
    console.log("ancien note of unser : "+ n);
    let ancienNote ="0"; 
    if(n!=null){ ancienNote = n ; }
    console.log("ancien  : "+ ancienNote);
    let newNote = Math.round((parseInt(ancienNote) +parseInt(this.note))/2); 
    console.log("new note of User ----> "+newNote); 

    this.service.evaluerUser(id, newNote).subscribe(ress=>{
      if(ress['RESPONSE']=="SUCCESS"){
        this.openToast("Evaluation effectuée avec succes"); 
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
