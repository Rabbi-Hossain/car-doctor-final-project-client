import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.confige";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvider = ({children }) => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    // signUp
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign In
    const LogInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out

    const LogOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    // update profile

    const updateUserProfile =(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
        
    }

   

    // spay lagano

    useEffect(()=>{
      const Unsubscribe =   onAuthStateChanged(auth, (newUser)=>{
            setUser(newUser)
            setLoading(false)
        })

        return()=>{
            Unsubscribe()
        }

    },[])


    const userInfo = {
        user,
        loading,
        createUser,
        LogInUser,
        updateUserProfile,
        LogOut
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;