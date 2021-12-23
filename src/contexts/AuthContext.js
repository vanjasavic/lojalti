import React, { useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from '../firebase'


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [items, setItems] = useState();

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

    //metoda za login putem emaila i passworda

    async function login(email,password){
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
            console.log("neuspjela registracija "+errorMessage);
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

            console.log("user dodan " + docRef);

        } catch (error) {
            console.log("greska" + error);
        }
    }

    /// KRAJ AUTH METODE ////


    //METODE ZA ITEME///

    async function getItems() {
        let _items = [];

        const querySnapshot = await getDocs(collection(db, "items"));
        querySnapshot.forEach((doc) => {
            _items.push(doc.data());
        });
        setItems(_items);
    }

    ///  KRAJ METODA ZA ITEME//


    // prati promjene da li je user ulogiran ili ne
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);

            console.log(user.uid);
        });

        return unsubscribe;
    }, []);


    const value = {
        currentUser,
        signUp,
        addUser,
        getItems,
        login,
        items
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
