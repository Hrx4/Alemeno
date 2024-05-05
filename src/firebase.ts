import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD9CQ19qNbtaDDTej4aodItEToV81NOPbw",
    authDomain: "alemeno-80dc6.firebaseapp.com",
    projectId: "alemeno-80dc6",
    storageBucket: "alemeno-80dc6.appspot.com",
    messagingSenderId: "1083846346436",
    appId: "1:1083846346436:web:7d2e672b49f7e0b2342b91",
    measurementId: "G-7734ST69NB"
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)