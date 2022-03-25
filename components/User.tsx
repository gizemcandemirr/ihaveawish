import React from 'react'
import {useDocument} from "react-firebase-hooks/firestore"
import firebase from 'firebase/compat/app';


type UserProps = {
    id: string;
}

const User: React.FC<UserProps> = ({id}) => {
    const [value, loading, error] = useDocument(firebase.firestore().doc(`users/${id}`))
  return (
    <div>
        <img src={value.data().photoURL} />
    </div>
  )
}

export default User