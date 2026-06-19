import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0Kl6k8HjxVvK_SA7Vv7_VGQnsJ5Ylku8",
  authDomain: "project-33-6ad26.firebaseapp.com",
  projectId: "project-33-6ad26",
  storageBucket: "project-33-6ad26.firebasestorage.app",
  messagingSenderId: "367541849695",
  appId: "1:367541849695:web:9bf048e5a7363ada1755ea",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;