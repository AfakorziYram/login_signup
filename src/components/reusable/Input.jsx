import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Input({icon,...props}) {
  return (
    <div className='flex '>
      <span className=' bg-gradient-to-r from-red-900 to-pink-900 p-2 p-l-3text-center font-semibold mb-5 rounded-full rounded-r-none'><FontAwesomeIcon icon={icon} /></span>
      <input  className='bg-stone-200 placeholder-gray-600 p-2 text-center font-semibold mb-5 rounded-full rounded-l-none' {...props}/>
    </div>
  )
}

export default Input