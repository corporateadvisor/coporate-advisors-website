import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUPUpJWIyMyk_zvD7AzafeNxsy39h4-wk",
  authDomain: "corporate-advisors-websi-b43bd.firebaseapp.com",
  projectId: "corporate-advisors-websi-b43bd",
  storageBucket: "corporate-advisors-websi-b43bd.firebasestorage.app",
  messagingSenderId: "472338199489",
  appId: "1:472338199489:web:95bdf5dbe3fd29aa5ff540",
  measurementId: "G-2QPR0TH5CR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };