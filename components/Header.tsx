import React from 'react'
import firebase from 'firebase/compat/app';


type Props = {}

const Header = (props: Props) => {

  const logout = ()=>{
      firebase.auth().signOut();
  }

  return (
    <div className='flex justify-end w-full'>
          <button className='bg-transparent text-white font-semibold hover:text-purple-500 py-2 px-4 border border-purple-500 hover:border-purple-800 rounded'
                  onClick={logout}
                  >
              Logout
          </button>
    </div>
  )
}

export default Header