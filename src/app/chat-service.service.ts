import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire';
@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private itemDoc: AngularFirestoreDocument<Rooms>;
  constructor(private data :AngularFirestore ) { }


  temp;

  getInfo(){
    return this.data.collection('ChatRooM').snapshotChanges();
  }


  addData(item){
    this.temp = this.data.collection<any>('ChatRoom');
    this.temp.add(item).then(() =>{

      console.log("successful");
    });
  }


}
