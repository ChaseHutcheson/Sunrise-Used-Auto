import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "@firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAEJi7cE8tUzFHuaayMiUiLIuqFoeZFd_8",
  authDomain: "sua-accounts-production.firebaseapp.com",
  projectId: "sua-accounts-production",
  storageBucket: "sua-accounts-production.appspot.com",
  messagingSenderId: "698972494753",
  appId: "1:698972494753:web:548925f76e57017af789e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);