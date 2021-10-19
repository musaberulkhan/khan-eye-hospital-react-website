import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser();
            })
    }


    const registerUserUsingEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {            
            const user = userCredential.user; 
        })
    }

    //Observer User State
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);                
            }
        });
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        registerUserUsingEmailPassword
    }
}

export default useFirebase;