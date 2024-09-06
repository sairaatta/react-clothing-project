import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const location = useLocation();
  const isAboutPage = location.pathname === '/aboutus';

  return (
    <nav className={`p-4 ${isAboutPage ? 'bg-white text-black' : 'bg-[#EFE8C2] text-black'}`}>
      <div className='flex justify-between items-center mx-auto relative'>
        <div className='ml-10'>
          <h1 className='font-bold text-3xl'>LOGO</h1>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className='text-2xl'>
            <FaBars />
          </button>
        </div>

        {/* Mobile menu container */}
        <div className={`fixed inset-0 bg-[#EFE8C2] z-50 ${isOpen ? 'flex' : 'hidden'} flex-col items-center justify-center md:hidden`}>
          {/* Close icon for mobile menu */}
          {isOpen && (
            <button
              onClick={toggleMenu}
              className='absolute top-4 right-4 text-2xl'
            >
              <FaBars />
              <FaTimes className='mt-8' />
            </button>
          )}

          <ul className='flex flex-col space-y-4'>
            <li>
              <Link to='/' className='text-[#272727] hover:underline font-semibold' onClick={toggleMenu}>HOME</Link>
            </li>
            <li>
              <Link to='/product' className='text-[#272727] hover:underline font-semibold' onClick={toggleMenu}>SHOP</Link>
            </li>
            <li>
              <Link to='/features' className='text-[#272727] hover:underline font-semibold' onClick={toggleMenu}>FEATURES</Link>
            </li>
            <li>
              <Link to='/contact' className='text-[#272727] hover:underline font-semibold' onClick={toggleMenu}>CONTACT</Link>
            </li>
            <li>
              <Link to='/aboutus' className='text-[#272727] hover:underline font-semibold' onClick={toggleMenu}>ABOUT US</Link>
            </li>
          </ul>

          <div className='flex flex-col space-y-4 mt-4'>
            <Link to='/cart' className='text-[#272727] hover:underline font-semibold'>
              <BsBag />
            </Link>
            <Link to='/login'>
              <button className='py-2 px-6 border-2 border-[#272727] rounded-xl'>
                LOGIN
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop menu */}
        <div className='hidden md:flex flex-grow items-center justify-center'>
          <ul className='flex flex-row space-x-12'>
            <li>
              <Link to='/' className='hover:text-[#272727] hover:underline font-semibold'>HOME</Link>
            </li>
            <li>
              <Link to='/product' className='hover:text-[#272727] hover:underline font-semibold'>SHOP</Link>
            </li>
            <li>
              <Link to='/features' className='hover:text-[#272727] hover:underline font-semibold'>FEATURES</Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-[#272727] hover:underline font-semibold'>CONTACT</Link>
            </li>
            <li>
              <Link to='/aboutus' className='text-[#272727] hover:underline font-semibold'>ABOUT US</Link>
            </li>
          </ul>

          <div className='flex space-x-4 md:space-x-14 mt-4'>
            <Link to='/cart' className='hover:text-[#272727] hover:underline font-semibold mt-2  ml-20'>
              <BsBag />
            </Link>
            <Link to='/login'>
              <button className='py-2 px-6 border-2 border-[#272727] rounded-xl'>
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
