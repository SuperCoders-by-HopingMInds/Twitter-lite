
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyDObyW6TU0w5ksmzQDVSONcfcLPiwCWHUk",
  authDomain: "twitter-clone-cf9bb.firebaseapp.com",
  projectId: "twitter-clone-cf9bb",
  storageBucket: "twitter-clone-cf9bb.appspot.com",
  messagingSenderId: "940326519827",
  appId: "1:940326519827:web:828d35ffa836c563fc2be6"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

