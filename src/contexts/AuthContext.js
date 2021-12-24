import React, { useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";
import { auth, db } from '../firebase'


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const provider = new GoogleAuthProvider();
    const providerFacebook = new FacebookAuthProvider();

    /// AUTH METODE//

    //za registraciju putem emaila i passworda
    async function signUp(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return true;
            // Signed in       

        } catch (error) {
            console.log("error" + error);
            const errorCode = error.code;
            const errorMessage = error.message;
            return false;
        }
    }

    //metoda za login putem Googla

    async function loginGoogle() {
        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const name = user.displayName.substring(0, user.displayName.indexOf(' '));
                addUser(user.email, name, "GOOGLE");
                // ...
                console.log("google sign in uspjesno");
                console.log(result);
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    /// metoda za login putem facebooka
    async function loginFacebook() {
        await signInWithPopup(auth, providerFacebook)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                //addUser(user.email, name, "GOOGLE");
                // ...
                console.log("facebook sign in uspjesno");
                console.log(user);
                console.log(result);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
            });
    }


    //metoda za login putem emaila i passworda
    async function login(email, password) {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("uspjesan login");
                return true;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("neuspjela registracija " + errorMessage);
                return false;
            });
    }

    //dodaje usera u kolekciju /users nakon registracije
    async function addUser(email, name, surname) {
        try {
            const docRef = await setDoc(doc(db, "users", currentUser.uid), {
                name: name,
                surname: surname,
                email: email
            });
            console.log("user dodan");

        } catch (error) {
            console.log("greska" + error);
        }
    }

    /// KRAJ AUTH METODE ////

    //vraća podatke o useru(name,points itd.)
    async function getUser() {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            return false;
        }
    }

    // prati promjene da li je user ulogiran ili ne
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);

            if (currentUser != null) { console.log(currentUser.uid); } else { console.log("odjavljen") };

        });
        return unsubscribe;

    }, []);


    const value = {
        currentUser,
        signUp,
        addUser,
        login,
        loginGoogle,
        loginFacebook
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
