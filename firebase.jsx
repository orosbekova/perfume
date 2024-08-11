import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmS65zc16PG1SXaA6_RLAgbRhzVc8Yfu0",
  authDomain: "newproduct-451be.firebaseapp.com",
  projectId: "newproduct-451be",
  storageBucket: "newproduct-451be.appspot.com",
  messagingSenderId: "293803010610",
  appId: "1:293803010610:web:aadd00735ee82e08c86a2b",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
