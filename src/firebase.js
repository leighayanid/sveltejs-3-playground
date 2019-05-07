import firebase from 'firebase/app';// rollup bundle issue with ESM import
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyCL_tpThKMj_OUco-4ADnwPOZt-WIRPtw4",
  authDomain: "svelte-shopping-list.firebaseapp.com",
  databaseURL: "https://svelte-shopping-list.firebaseio.com",
  projectId: "svelte-shopping-list",
  storageBucket: "svelte-shopping-list.appspot.com",
  messagingSenderId: "603305448026",
  appId: "1:603305448026:web:6eb3163942d97a8e"
};

console.log(firebase)

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

export const db = firebase.firestore();


