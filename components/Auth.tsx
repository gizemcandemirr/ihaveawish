import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';


const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
  };

const Auth = () => {
  return (
    <div>
    <h1>My App</h1>
    <p>Please sign-in:</p>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  </div>
  )
}

export default Auth
