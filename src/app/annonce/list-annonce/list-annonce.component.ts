import { DatePipe } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ApiAnnonceService } from 'src/app/services/api-annonce.service'; 
import * as moment from 'moment';
@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.scss'],
})
 
export class ListAnnonceComponent implements OnInit {
  anss:any=[];
  constructor(private service:ApiAnnonceService, private navCtrl: NavController ,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    this.getAnnonces();
  }

  getAnnonces(){
    let dp = localStorage.getItem("depart");
    let arr = localStorage.getItem("arrivee");
    let dat = localStorage.getItem("date");  
    let x = moment(dat).format('YYYY-MM-DD')
    console.log("depart ; "+dp);
    console.log("arrivee : "+arr);
    console.log("date : "+x);
    this.service.allAnnonces(dp, arr, x).subscribe(res=>{
      if(res['RESPONSE']!="ERREUR"){
        console.log("existeeeeeeeeeeeeeeeeeeeeeeee : ");
        this.anss = res;
        console.log("aaaaaaaaaaaaaaaa  : "+this.anss.length);
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

 


 
}
