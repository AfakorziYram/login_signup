import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase';

function GoogleAuth() {
    async function handleGoogleClick(){

        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth,provider);
            const user_Data ={
                id: result.user.uid,
                name:result.user.displayName,
                email:result.user.email,
                photo: result.user.photoURL,

            } 

            const response = await fetch('https://auth-development-1f77e-default-rtdb.firebaseio.com/userData.json',{
                method: 'POST',
                headers:{
                  'Content-Type': 'application.json'
                },
                body: JSON.stringify(user_Data),
            });
            const data = response.json();
            

        } catch (error) {
            
        }

    }
  return (
    <button type='button' onClick={handleGoogleClick} className=' font-semibold bg-blue-300 rounded-xl p-2 mb-5'>sign in with google</button>
  )
}

export default GoogleAuth