import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firebase-auth';

var firebaseConfig = {
  apiKey: "AIzaSyBWiQn_gIQY4wvMnljHTuZLu1-_XjW9mDg",
  authDomain: "cat-chasing-tail.firebaseapp.com",
  projectId: "cat-chasing-tail",
  storageBucket: "cat-chasing-tail.appspot.com",
  messagingSenderId: "704826499583",
  appId: "1:704826499583:web:7ad956be8eb961416687ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const auth = firebase.auth();

export {
  auth, storage, firebase as default
}