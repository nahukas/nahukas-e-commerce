import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'nahukas-e-commerce.firebaseapp.com',
  projectId: 'nahukas-e-commerce',
  storageBucket: 'nahukas-e-commerce.appspot.com',
  messagingSenderId: '261427242364',
  appId: '1:261427242364:web:8e2defa1ba95922b2830f9',
  measurementId: 'G-97XMT8DHG8'
};

const firebase = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
