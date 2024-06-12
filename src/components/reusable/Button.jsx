import React from 'react';


function Button({buttonText,...props}) {
  return (
    <button {...props} className='bg-slate-800 text-white px-7 py-2  mb-5 rounded-2xl w-30 font-semibold text-2xl uppercase hover:bg-black disabled:opacity-50'>
        {buttonText}
    </button>
  )
}

export default Button