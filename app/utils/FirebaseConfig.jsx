import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBeevZjTYI9f85pNKXG-O5Kx0VZ18np5Sc",
  authDomain: "smartprep-64cfd.firebaseapp.com",
  projectId: "smartprep-64cfd",
  storageBucket: "smartprep-64cfd.appspot.com",
  messagingSenderId: "699672281852",
  appId: "1:699672281852:web:b73f3cdf9b459966474d79"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
console.log('Done')
