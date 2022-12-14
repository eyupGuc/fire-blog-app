import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
 
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
 
} from "firebase/auth";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  databaseURL: process.env.REACT_APP_databaseURL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    alert(error);
  }
};

export const signUpWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/");
    })
    .catch((error) => {
      alert(error);
    });
};

export const sigIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (error) {
    alert(error);
  }
};

export const logOut = () => {
  signOut(auth);
  console.log("logOut clicked")
};

 export const userObserver=(setCurrentUser)=>{
  onAuthStateChanged(auth,(user)=>{
    if(user){
      const{email,displayName,photoURL}=user;
      setCurrentUser({email,displayName,photoURL});
      // console.log(user)
    }else{
      setCurrentUser(false);
      console.log("User signed out")
    }
  })
 }
