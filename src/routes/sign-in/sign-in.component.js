import React from 'react'
import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
export default function SignIn() {
   
   const logGoogleuser=async ()=>{
    try{  
    const response = await signInWithGooglePopup();
        console.log(response,'printing response after sign in')
        createUserDocumentFromAuth(response.user)
    }
    catch(err){
        console.log('why this error',err)
    }
    }
    return (
        <div>
            <h1> this is  asign in page</h1>
            <button onClick={logGoogleuser}>Sign in with google user</button>
        </div>
    )
}
