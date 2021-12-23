import { GoogleAuthProvider ,getAuth,signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializedAuth from '../components/Firebase/firebase-init';

initializedAuth();
const useFirebase = () => {
  const [user,setUser]=useState({})
  const [isLoading,setIsLoading] = useState(true);

const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth();

const signInWithGoogle=()=>{
 return signInWithPopup(auth, GoogleProvider)
 
}
const logOut = ()=>{
  setIsLoading(true);
   signOut(auth)
   .then(()=>{
     setUser({})
   })
   .finally(()=>{
    setIsLoading(false)
  })
 }

//  observer user state
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } 
      else{
        setUser({})
      }
      setIsLoading(false)
    });
    return unsubscribe;
  },[])
  return{
    signInWithGoogle,
    user,
    logOut,
    isLoading
  }
};

export default useFirebase;