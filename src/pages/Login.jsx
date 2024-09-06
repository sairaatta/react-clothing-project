import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import googlelogo from '../assets/images/googlelogo.png';

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-[#EFE8C2] p-4'>
      <div className='bg-[#EFE8C2] p-8 rounded-lg  w-full max-w-sm sm:max-w-md'>
        <h1 className='text-3xl font-bold  text-center mb-4'>Login</h1>
        <p className='text-center mb-6 font-bold text-sm sm:text-base'>Please enter your Login and your Password</p>
        <div className='relative mb-4' >
          <span className='absolute inset-y-0 left-0 pl-4 flex items-center'>
            <FaUserAlt className='text-gray-500 text-lg sm:text-xl' />
          </span>
          <input
            type='text'
            placeholder='Username or Email'
            outoComplete='off'
            className='w-full pl-10 p-2 border-2 border-gray-700 rounded-2xl placeholder-black bg-transparent text-sm sm:text-base'
          />
        </div>
        <div className='relative mb-4'>
          <span className='absolute top-6 transform -translate-y-1/2 left-4 flex items-center'>
            <FaLock className='text-gray-500 text-lg sm:text-xl' />
          </span>
          <input
            type='password'
            placeholder='Password'
            autoComplete='off'
            className='w-full pl-10 p-2 border-2 border-gray-700 rounded-2xl bg-transparent placeholder-black text-sm sm:text-base'
          />
          <p className='text-right text-gray-600 hover:underline mt-0 text-xs sm:text-sm cursor-pointer'>
            Forget password?
          </p>
        </div>

        <div className='mb-6'>
          <button className='w-full bg-transparent text-black font-bold p-2 rounded-xl hover:bg-[#e0d8ae] transition border-2 border-gray-700 text-sm sm:text-base'>
            Login
          </button>
        </div>
        <div className='flex flex-col items-center'>

          <button className='flex items-center justify-center w-full bg-gray-600 text-white p-2 rounded-xl hover:bg-gray-700 transition border-2 border-gray-700 text-sm sm:text-base'>
            <span className='mr-2'>
              <img src={googlelogo} alt="google logo" className='w-5 h-5 sm:w-6 sm:h-6 rounded-xl ' />
            </span>
            Or, sign-in with Google
          </button>
          <p className='text-center mt-2 font-bold text-sm sm:text-base'>
            Not a member yet?{' '}
            <span className='text-gray-600 hover:underline cursor-pointer italic font-normal'>
              Register!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
