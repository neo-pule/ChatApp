import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFirestoreDocument} from '@angular/fire/firestore'
import { ChatServiceService } from '../../chat-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-chat',
  templateUrl: './on-chat.page.html',
  styleUrls: ['./on-chat.page.scss'],
})
export class OnChatPage implements OnInit {
  itemList;
name;
mess;
time;
mail
temp;
  constructor(private dog : AngularFirestore,private obj :ChatServiceService,private data :Router) { 
    this.obj.getInfo().subscribe(data => {
      this.temp = data;
    })
this.itemList = this.dog.collection('users').valueChanges();
console.log(this.itemList)
console.log(this.temp)
//this.cat = this.list.getInfo();

  // this.obj.getInfo().subscribe(data => {
    
  //  this.itemList = data.map ( e => {
  //    return{
  //      key: e.payload.doc.id,
  //      ...e.payload.doc.data()
  //    } as Rooms;
  //  });
  // })


}

clicked(Item){
  this.temp = Item.uid;
  this.mess = Item.message;
  this.time = Item.time;
  this.mail = Item.email;
     console.log(this.itemList);
 return this.data.navigate(['/about/first-page/private-chat'], {queryParams: {temp :this.temp,mess :this.mess,time :this.time,mail :this.mail,}}); 
//  console.log(this.nkey);
//  console.log(this.nPrice);
//  console.log(this.nPrice);

 }

  ngOnInit() {
  }

}
