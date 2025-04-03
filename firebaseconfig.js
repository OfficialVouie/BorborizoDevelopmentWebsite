// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_LyfMoQz_O9idEyhQJol924C_0ZhL2MY",
  authDomain: "borborizo-development-website.firebaseapp.com",
  projectId: "borborizo-development-website",
  storageBucket: "borborizo-development-website.appspot.com",
  messagingSenderId: "1063558280470",
  appId: "1:1063558280470:web:ecf064bd10822d704a0c37",
  measurementId: "G-KKV49WKPB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
