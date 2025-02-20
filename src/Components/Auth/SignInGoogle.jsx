import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../../Firebase/firebaseinit';

const SignInGoogle = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
     
    // Sign in with Google
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user.displayName, user.email);
            
        })
    }
  return (
    <>
    <div>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
    </>
  )
}

export default SignInGoogle