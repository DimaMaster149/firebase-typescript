import { action, observable, computed } from 'mobx';
import firebase from 'firebase';
import User from './profileUser';

//import without curly brackerts because of export default

export default class Auth {

  @computed get user() {
    return User;
  }

  @action.bound public loginGoogle(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      if (result.credential) {
        const token = (result as any).credential.accessToken;
      }
      // The signed-in user info.
      const user = result.user;
      if (user) {
        User.setUserEmail(user.providerData[0].email);
      }
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  @action.bound public signUp(email: string, password: string): void {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      console.log(result);
      User.setUserEmail(result.user.providerData[0].email);
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  @action.bound public signIn(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      User.setUserEmail(result.user.providerData[0].email);
    })
    .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error, 'error');
    alert(errorMessage);
    });
  }

  @action.bound public logOut(): void {
    if (this.user.isAuth()) {
      firebase.auth().signOut().then(function() {
        User.setUserEmail('');
          alert('You are log out');
        }).catch(function(error) {
          console.log(error);
        });
    } else {
      alert('You are not log in');
    }
  }

}
