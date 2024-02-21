import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,
signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from "../firebase"

export const authContext = createContext()

export const useAuth = () =>{
  const context =  useContext(authContext)
  if(!context) throw new Error('There is not auth provider')
  return context
}

export function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

const singup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

    const login = async (email, password) =>
     signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)


    const loginWithGoogle = () => {
        const gooleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, gooleProvider)
    }
     
    useEffect(() => {
       const unsuscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsuscribe()
    }, [])
    
        
    
    return(
        <authContext.Provider value={{singup, login, user, logout, loading, loginWithGoogle}}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;