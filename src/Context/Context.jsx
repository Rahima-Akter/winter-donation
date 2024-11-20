import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config"


export const authContext = createContext()

const Context = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    

    const handleRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(false)
        signOut(auth)
    }

    const manageProfile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    // forget password

    const hadleForgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // google Login
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setLoading(true)
                setUser(result.user);  // user info
                return result.user; // Optionally return user data
            })
            .catch((error) => {
                console.error("Error during Google login: ", error);
            });
    };
    
    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        });

        return () => {
            unsubscribe()
        };

    }, [])


    const authInfo = {
        handleRegister,
        handleGoogleLogin,
        logIn,
        logOut,
        manageProfile,
        hadleForgetPassword,
        loading,
        user,
        setUser
    }

    return (

        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>

    );
};

export default Context;