import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full p-8 md:p-16 bg-[#635d2a] text-white'>
      <div className='flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0'>
        <div className='flex-1 p-4'>
          <h1 className='font-bold text-2xl'>LOGO</h1>
          <h3 className='mt-6 text-sm'>SOCIAL MEDIA</h3>
          <div className='mt-4 flex space-x-4'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500'>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-pink-600'>
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-blue-600'>
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className='flex-1 p-4'>
          <h1 className='text-lg font-semibold'>SHOP</h1>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to="/" className='text-white hover:text-white hover:underline'>Products</Link>
            </li>
            <li>
              <Link to="/" className='text-white hover:text-white hover:underline'>Overview</Link>
            </li>
            <li>
              <Link to="/" className='text-white hover:text-white hover:underline'>Pricing</Link>
            </li>
            <li>
              <Link to="/" className='text-white hover:text-white hover:underline'>Releases</Link>
            </li>
          </ul>
        </div>
        <div className='flex-1 p-4'>
          <h1 className='text-lg font-semibold'>COMPANY</h1>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to='/aboutus' className='text-white hover:text-white hover:underline'>About Us</Link>
            </li>
            <li>
              <Link to='/contact' className='text-white hover:text-white hover:underline'>Contact</Link>
            </li>
            <li>
              <Link to='/news' className='text-white hover:text-white hover:underline'>News</Link>
            </li>
            <li>
              <Link to='/support' className='text-white hover:text-white hover:underline'>Support</Link>
            </li>
          </ul>
        </div>
        <div className='flex-1 p-4'>
          <h1 className='text-lg font-semibold'>STAY UP TO DATE</h1>
          <div className='flex flex-col md:flex-row items-center mt-4 space-y-2 md:space-y-0 '>
            <input
              type="email"
              placeholder='Enter Your Email'
              className='py-2 px-4 border-2 border-white outline-none text-black bg-transparent flex-grow'
            />
            <button className='py-2 px-4 text-[#363321] bg-white font-semibold border-2 border-white'>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
