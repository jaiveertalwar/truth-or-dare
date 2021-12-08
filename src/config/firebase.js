import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBOAlkDybjNyPqHWcfTYfF9BkQCg71Zds0",
  authDomain: "sharearccom.firebaseapp.com",
  databaseURL: "https://sharearccom-default-rtdb.firebaseio.com",
  projectId: "sharearccom",
  storageBucket: "sharearccom.appspot.com",
  messagingSenderId: "36714115889",
  appId: "1:36714115889:web:22b7bf0dcef079f1d9f610"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
export const analytics = firebase.analytics();
