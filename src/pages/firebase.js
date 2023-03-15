
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBe94L-feK5SrT0KuupFSLV30b311Cf4DI",
  authDomain: "chat-application-e9958.firebaseapp.com",
  projectId: "chat-application-e9958",
  storageBucket: "chat-application-e9958.appspot.com",
  messagingSenderId: "490477157826",
  appId: "1:490477157826:web:55c6cc9d61d46d723f2a5b",
  measurementId: "G-899ST9MWZF"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);