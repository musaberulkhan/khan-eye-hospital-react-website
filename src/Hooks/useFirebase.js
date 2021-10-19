import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    // -------  States   ----------
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // --------   Google Sign In   --------
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }

    // --------   Log Out  --------
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser();
            })
    }

    // --------   Register Using Email and Password  --------
    const registerUserUsingEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
    }

    // --------   Sign In Using Email and Password  --------
    const signInUserUsingEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
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
        registerUserUsingEmailPassword,
        signInUserUsingEmailPassword
    }
}

export default useFirebase;