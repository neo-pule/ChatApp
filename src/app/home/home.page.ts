import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { ChatServiceService } from '../chat-service.service';
import { AngularFireModule } from '@angular/fire';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { User,auth } from 'firebase';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user1;
  user2;
  mess;
  name;
  temp; //  : Observable<any[]>
  obj = {
   message : "",
   sender : "",
   recepient : ""
  };
  constructor( private car : ChatServiceService, public afAuth: AngularFireAuth) { 
    this.name = this.afAuth.auth.currentUser;
    // this.temp = this.data.collection('ChatRooM').valueChanges();
    // console.log("database object")
    // console.log(this.temp)

    // console.log(this.temp.sender)
    // console.log(this.temp.recepient)
    // console.log(this.temp.message)
    // this.obj.sender = this.temp.sender;
    // this.obj.recepient = this.temp.recepient;
    // this.obj.message = this.temp.message;

    // console.log("local object")
    // console.log(this.obj)
    // console.log(this.obj.sender)
    // console.log(this.obj.recepient)
    // console.log(this.obj.message)

    
  this.car.getInfo().subscribe(data => {
    
    this.temp = data.map ( e => {
      return{
        key: e.payload.doc.id,
        ...e.payload.doc.data()
      } as Rooms;
    });
   })
   console.log(this.temp)
   this.name = this.afAuth.auth.currentUser;
  }

  
  Gone(){
  console.log(this.car)
     console.log(this.obj.recepient)
     console.log(this.obj.message)
     this.temp = this.car.addData(this.obj);
     this.temp = this.car.getInfo();
   // this.data.collection<any>('ChatRooM');
    
  }



  hack(val) {
    // console.log('Before:');
    // console.log(val);
    val = Array.from(val);
    // console.log('After:');
    // console.log(val);
    return val;
  }

}
