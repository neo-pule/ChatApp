import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';
import { User,auth } from 'firebase';

import { Router, RouterEvent, NavigationEnd  } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
temp :boolean;
name :string;
recaptchaVerifier:firebase.auth.RecaptchaVerifier;
appVerifier;
phone;
user1;
code;
provider;

IsDisabled :boolean =false;
IsDisable :boolean =false;
  constructor(public afAuth: AngularFireAuth,private router: Router) { 
     this.provider = new firebase.auth.GoogleAuthProvider();
   //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('container');
  }

  signInMail(){
    this.IsDisable =true;
    firebase.auth().signInWithRedirect(this.provider);
    firebase.auth().getRedirectResult().then( result=> {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
       // var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      console.log("user signIn successful")
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("user could not signIn")
      // ...
    });

  }

  PhoneAuth(){
    this.IsDisabled =true;
// this.appVerifier = this.recaptchaVerifier;
    return firebase.auth().signInWithPhoneNumber(this.phone, this.recaptchaVerifier).then( confirmationResult => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      this.user1 = confirmationResult;
    }).catch(confirmationResult => {
      // Error; SMS not sent
      // ...
      console.log("Error.. SMS not sent");
      console.log(confirmationResult);
      console.log("Blue  Magic");
    });
    
  }
  continue()
  {
    console.log(this.code);
    this.user1.confirm(this.code).catch( function(err){

      alert("User couldn't sign in (bad verification code?)")
      console.log("User couldn't sign in (bad verification code?) !!")
      console.log(this.user1)
    
  });
  alert("User sign in successful")
  }
  signOut(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful. 
      console.log("user Sign-out successful ")
    }).catch(function(error) {
      // An error happened.
      console.log("user Sign-out error")
    });
  }
  signAnnony(){
    firebase.auth().signInAnonymously().then(function(user) {
      if (user) {
        // User is signed in.
  
        console.log(user)
        console.log("user logged In successful")
        console.log(user.user.uid)
        console.log(firebase.auth().currentUser.uid)
     
      } else {
        // User is signed out.
        // ...
        console.log("user error logging In")
      }
      
    });
   
  }
  ngOnInit() {  
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.recaptchaVerifier.render()
  }

}
