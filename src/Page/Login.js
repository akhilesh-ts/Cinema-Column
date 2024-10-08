import React, { useState } from 'react'
import background from '../asset/background.jpg'


const Login = () => {
  const [isRegister,setIsRegister]=useState(false)
  const handelRegistration=()=>{
    setIsRegister(!isRegister)
  }
  return (
    <div className='w-full h-screen flex items-center justify-center bg-gradient-to-r bg-black p-2 bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${background})` }}>
  <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 pointer-events-none'></div>
  
  <form className='relative w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-6 shadow-lg rounded-lg'>
    <div className='bg-black bg-opacity-70 p-6 rounded-lg flex flex-col gap-2'>
      <h2 className='text-center font-extrabold text-3xl text-white mb-3'>{isRegister ?'Sign Up':'Sign In'}</h2>
{
  isRegister?<input type="name" className='w-full rounded-lg p-2 bg-gray-400 text-white' placeholder='Enter name' />:null
}
      
      <input type="email" className='w-full rounded-lg p-2 bg-gray-400 text-white mt-4' placeholder='Email address..' />
      <input type="password" className='w-full rounded-lg p-2 mt-4 bg-gray-400 text-white' placeholder='Password..'/>
      <button className='w-full rounded-lg bg-red-600 text-white p-2 mt-4 mb-5'>
        {
          isRegister ? "Sign Up" : "Sign In"
        }
        </button>
      {
        isRegister ?(
          <p className=' text-sm text-white block mt-4 cursor-pointer' onClick={()=>handelRegistration()}><span className='text-slate-400'>Already Member?</span> Sign in now.</p>
        ):(
          <p className=' text-sm text-white block mt-4 cursor-pointer' onClick={()=>handelRegistration()}><span className='text-slate-400'>New to Cinema Column?</span> Sign up now.</p>
        )
      }
      
    </div>
  </form>
</div>
  )
}

export default Login
