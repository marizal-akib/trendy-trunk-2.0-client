import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const userWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const emailSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user State Changed", currentUser);

      
      setUser(currentUser);
      setLoading(false);
      const user = {
        userName: currentUser?.displayName,
        email: currentUser?.email,
        img: currentUser?.photoURL,
      };

      // using axios
      axios.post("http://localhost:5000/user", user ) 
      .then(data =>{
        console.log(data.data)
        localStorage.removeItem('cart')
      })




      // // using fetch
      // fetch("http://localhost:5000/user", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //   },
      //   body: JSON.stringify(user),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data); 
      //     localStorage.clear();
      //   });
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const conInfo = {
    user,
    singInWithGoogle,
    loading,
    logOut,
    userWithEmail,
    emailSignIn,
  };

  return (
    <AuthContext.Provider value={conInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
