// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKJN91IiEu-3xSHutUSoxZZAt-SZUezkY",
  authDomain: "fireblog-4335d.firebaseapp.com",
  projectId: "fireblog-4335d",
  storageBucket: "fireblog-4335d.appspot.com",
  messagingSenderId: "842723826394",
  appId: "1:842723826394:web:3cf65af49119bead5d63e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

export const singIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/")
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

export const userObserver = (setCurrentUser) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
};
