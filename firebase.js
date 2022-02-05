// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAG0anGh_KTHYL5483LceG412RoSllXv9s',
  authDomain: 'cryptogram-9a102.firebaseapp.com',
  projectId: 'cryptogram-9a102',
  storageBucket: 'cryptogram-9a102.appspot.com',
  messagingSenderId: '857896906285',
  appId: '1:857896906285:web:20eb9a8a59474375f8d2a4',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
