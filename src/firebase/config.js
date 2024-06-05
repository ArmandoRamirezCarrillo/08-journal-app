// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7zTNU_ho1ARBjfsP_pPU3pDqx165PXi8",
  authDomain: "journal-app-c347b.firebaseapp.com",
  projectId: "journal-app-c347b",
  storageBucket: "journal-app-c347b.appspot.com",
  messagingSenderId: "797291674795",
  appId: "1:797291674795:web:dd23b965b31de9732b0bee"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);