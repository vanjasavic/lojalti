import React, {useContext,useState,useEffect} from 'react'
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    
    const [currentUser,setCurrentUser] = useState()

     async function signUp(email,password){
        try {
            const userCredential =  await createUserWithEmailAndPassword(auth, email, password);
            // Signed in       
       
        } catch (error) {
            console.log("error"+error);
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user);
            console.log(user);
        });
    
        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signUp,
    }

    return (      
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
