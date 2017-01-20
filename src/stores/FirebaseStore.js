import { observable, action, useStrict, runInAction } from 'mobx';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey            : "AIzaSyDP0HvcxbnYw2k2p4vNnXDH0UVHot1YjkA",
  authDomain        : "authrn-ac203.firebaseapp.com",
  databaseURL       : "https://authrn-ac203.firebaseio.com",
  storageBucket     : "authrn-ac203.appspot.com",
  messagingSenderId : "400839412791"
});


useStrict(true);

class FirebaseStore {
  @observable item = {};
  @observable items = [];

  @action getItems () {
    const fbDatabase = firebase.database().ref('items');
    fbDatabase.on('value', (val) => {
      runInAction('update', () => {
        this.items = val.val();
      })
    });
  }

  @action setItem (item) {
    this.item = item;
  }
}

const firebaseStore = new FirebaseStore();
export default firebaseStore;
