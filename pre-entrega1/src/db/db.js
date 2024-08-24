
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyC6opo-CDtW9S1LntqiKtoEXVJlcl91E-M",
  authDomain: "ecommerce-57800-aec97.firebaseapp.com",
  projectId: "ecommerce-57800-aec97",
  storageBucket: "ecommerce-57800-aec97.appspot.com",
  messagingSenderId: "47722424584",
  appId: "1:47722424584:web:66c676eb2e0e1915f0a4bd"
};


initializeApp(firebaseConfig);

const db = getFirestore ()

export default db 