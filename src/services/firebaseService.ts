// Singleton class
import firebase from 'firebase'
import {config} from '@/firebase-config.ts'

export default class Firebase {

  private static _instance:Firebase = new Firebase();

  constructor() {
    // firebase db config

    const app = firebase.initializeApp(config);

    //Создается в опр месте когда нужно подключение к бд
    const db = app.database();
    const gamesRef = db.ref('games');

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          console.log(user);
      } else {
          console.log('no user');
      }
    });

      if(Firebase._instance){
          throw new Error("Error: Instantiation failed: Use FirebaseCFirebaselass.getInstance() instead of new.");
      }
      Firebase._instance = app;
  }

  public static getInstance():Firebase
  {
      return Firebase._instance;
  }

}
