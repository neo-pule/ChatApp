import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions,  } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser';
import {AngularFirestore} from '@angular/fire/firestore';
import { ChatServiceService } from '../../chat-service.service';

import { AngularFireAuth } from '@angular/fire/auth';
import { User,auth } from 'firebase';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  photos : any[];
  user1;
  phone;
  age;
 id;
 desc;
 gender;


  user ={
    about :"",
    name : "",
    
    phone : 0,
    gender : ""
  }
  constructor(private afAuth : AngularFireAuth,private dog :AngularFirestore,private cam: Camera,private file :File, private data :ChatServiceService) { }

  photo(){
    
    const options : CameraOptions = {
      quality: 100,
      destinationType: this.cam.DestinationType.FILE_URI,
      encodingType: this.cam.EncodingType.JPEG,
      mediaType: this.cam.MediaType.PICTURE
      
    }
    
    this.cam.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let filename = imageData.substring(imageData.lastIndexOf('/')+1);
      let path = imageData.substring(0,imageData.lastIndexOf('/')+1);
      this.file.readAsDataURL(path,filename).then((basedata) =>{
        this.photos.push(basedata);
      })
      
      console.log(imageData)
      console.log("Pic Done ..")
    //  let base64Image = 'data:image/jpeg;base64,' + imageData;
     });
     console.log("Done ..")
  }


  done(obj){
 
   this.data.update(obj);
  }
  ngOnInit() {
  }

}
