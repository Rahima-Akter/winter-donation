import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config"
import { useLocation, useNavigate } from "react-router-dom";


export const authContext = createContext()

const Context = ({ children }) => {

    const [user, setUser] = useState(null)
    

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        signOut(auth)
    }

    const manageProfile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    // google Login
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
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
            } else {
                setUser(null)
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