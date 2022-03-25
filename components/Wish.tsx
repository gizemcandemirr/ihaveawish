import React from 'react'
import User from './User';

type WishProps = {
    wish:string;
    userId: string;
}

const Wish : React.FC<WishProps> = ({wish, userId}) => {
  return (
    <div className='gradient-card flex items-center bg-brand-dark border-none mb-4 rounded-md text-white text-lg'>
       <User id={userId} />
        <span className=''>{wish}</span>
    </div>
  )
}

export default Wish