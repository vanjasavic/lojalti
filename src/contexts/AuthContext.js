import React, {useContext,useState,useEffect} from 'react'
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import {auth,db} from '../firebase'


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    
    const [currentUser,setCurrentUser] = useState()

    async function addUser(email,name,surname){

        try{
            const docRef = await setDoc(doc(db, "users",currentUser.uid), {
                name: name,
                surname: surname,
                email: email
              });
              console.log("user dodan "+docRef);

        }catch(error){
            console.log("greska"+error);
        }

    }

     async function signUp(email,password){
        try {
            const userCredential =  await createUserWithEmailAndPassword(auth, email, password);
            return true;
            // Signed in       
       
        } catch (error) {
            console.log("error"+error);
            const errorCode = error.code;
            const errorMessage = error.message;
            return false;
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user)=> {
            setCurrentUser(user);
            console.log(user.uid);
        });
    
        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signUp,
        addUser
    }

    return (      
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
