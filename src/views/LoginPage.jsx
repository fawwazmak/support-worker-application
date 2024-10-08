import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();

        navigate('/serviceProfile');
    }

    
  return (
    <div className='bg-purple-800 w-screen h-screen flex items-center justify-center'>
      <form action="" method="post" className='bg-gray-200 md:w-2/5 w-4/5 px-5 py-8 flex flex-col gap-8 rounded-[10px] opacity-80 border-2 border-black' onSubmit={onSubmit}>
        <div className='flex flex-col gap-1'>
            <h1 className='md:text-3xl text-2xl text-center font-bold'>Welcome</h1>
            <p className='text-center'>Login your account to continue</p>
        </div>

        <div className='flex justify-between gap-2 border-b-2 border-b-purple-800 pb-2'>
            <input className='block w-full border-none outline-none focus:outline-none focus:border-none bg-transparent' type="email" name="email" id="email" placeholder="email" />
            <FontAwesomeIcon icon={faEnvelope} />
        </div>


        <div className='flex justify-between gap-2 border-b-2 border-b-purple-800 pb-2'>
            <input className='block w-full border-none outline-none focus:outline-none focus:border-none bg-transparent' type='password' name="password" id="password" placeholder="password" />
            <FontAwesomeIcon icon={faLock} />
        </div>

        <button className='bg-purple-800 py-2 rounded-[5px] text-gray-200 text-xl font-medium'>Login</button>

        <p className='text-center'>Don't have an account? <span className='text-blue-500 cursor-pointer'>Sign up here</span></p>
      </form>
    </div>
  )
}

export default LoginPage
