
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA0p6kOi71p5UblPQiFrsWZuCHZt6QKhmU",
  authDomain: "netflix-clone-ffb11.firebaseapp.com",
  projectId: "netflix-clone-ffb11",
  storageBucket: "netflix-clone-ffb11.appspot.com",
  messagingSenderId: "118981474706",
  appId: "1:118981474706:web:b043ccc0020e42fd12a94b",
  measurementId: "G-4BHLXECZGP"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
