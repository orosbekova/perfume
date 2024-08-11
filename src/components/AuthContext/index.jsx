import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  async function registerUser(email, password) {
    try {
      createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
    }
  }


const googleProvidere = new GoogleAuthProvider()
function logInOut(){
  return signInWithPopup(auth,googleProvidere)
}




  const values = {
    registerUser,
    logInOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
