import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyChzozpR2ECP9x7Yg0EaRa25pKpnCqmeps",
    authDomain: "portfolio-contactsection.firebaseapp.com",
    projectId: "portfolio-contactsection",
    storageBucket: "portfolio-contactsection.appspot.com",
    messagingSenderId: "766192045888",
    appId: "1:766192045888:web:58c7b1296f5f4acea9f4a5",
    measurementId: "G-1B4VYMBEQ2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };