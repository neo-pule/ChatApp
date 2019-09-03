import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
isDiasabled : boolean = true;
email;
pass;


  constructor(private route:Router,public afAuth: AngularFireAuth) { }


  chang(){
    this.isDiasabled =false;
  }

 
  signUP(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.pass).then(error => {
      // Handle Errors here.
      //var errorCode = error.code;
     // var errorMessage = error.message;
     console.log(error)
      console.log("user created")
    //  this.route.navigateByUrl("/sign-in")
      // ...
    });
  }
  ngOnInit() {
  }

}
