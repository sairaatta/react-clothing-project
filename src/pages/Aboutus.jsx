import React from 'react';
import aboutus from '../assets/images/aboutus.jpg';
import mission from '../assets/images/mission.jpg';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';

const Aboutus = () => {
  return (
    <>
      {/* about us section */}
      <section className='flex flex-col md:flex-row p-4 mb-20'>
        {/* Text Section */}
        <div className='flex-1 flex flex-col justify-center mx-auto md:ml-12 md:mt-0 mt-8 md:mr-8 p-4'>
          <div className='flex flex-row space-x-2 p-2'>
            <span className='text-[#6F6A42] text-3xl font-bold'>About </span>
            <span className='text-[#6F6A42] text-3xl font-medium'> Us </span>
          </div>
          <div className='w-full max-w-md mt-6 p-2'>
            <p className='text-justify'>
              Welcome to Logo – your ultimate destination for
              cool and trendy fashion! At Logo, we are
              dedicated to providing the latest styles that
              resonate with the vibrant and dynamic spirit of
              today's youth. Our collection is carefully curated
              to ensure that every piece embodies the
              cutting-edge trends and timeless coolness that
              define your unique style.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex-1 flex items-center justify-center p-4 mt-8 md:mt-28 md:mr-12'>
          <img src={aboutus} className='h-auto max-w-full rounded-xl shadow-2xl' alt="About Us" />
        </div>
      </section>


      {/* our mission  */}
      <div className='p-4 mb-20'>
        <div className='mb-10'>
          <h1 className='text-center font-bold text-2xl text-[#6F6A42]'>Our Mission</h1>
        </div>
        {/* Section with Image and Text */}
        <section className='flex flex-col md:flex-row p-4'>
          {/* Image Section */}
          <div className='flex-1 flex items-center justify-center'>
            <img src={mission} className='h-auto w-full max-w-2xl rounded-xl shadow-2xl' alt="Mission" />
          </div>
          {/* Text Section */}
          <div className='flex-1 flex flex-col justify-center px-4 mt-0 md:mt-2 md:ml-8'>
            <p className='text-justify w-full max-w-lg leading-loose '>
              Our mission is simple: to inspire and empower youngsters to express
              themselves through fashion. Whether you're looking for the perfect outfit for a
              night out, a casual day at school, or anything in between, Logo has you
              covered. We believe in fashion as a form of self-expression, and our diverse
              range of clothing is designed to cater to every mood and moment.
            </p>
          </div>
        </section>
      </div>


      {/* our team section */}
      <div className='p-4 mb-20'>
        <h1 className='text-center font-bold text-2xl text-[#6F6A42]'>Our Team</h1>
        <section className='flex flex-wrap md:flex-nowrap justify-center md:justify-start p-4 space-y-4 md:space-y-0 md:space-x-4'>
          <div className='w-full md:w-1/4 flex justify-center'>
            <img src={team1} className='h-auto w-full max-w-xs rounded-lg shadow-lg' />
          </div>
          <div className='w-full md:w-1/4 flex justify-center'>
            <img src={team2} className='h-auto w-full max-w-xs rounded-lg shadow-lg' />
          </div>
          <div className='w-full md:w-1/4 flex justify-center'>
            <img src={team1} className='h-auto w-full max-w-xs rounded-lg shadow-lg' />
          </div>
          <div className='w-full md:w-1/4 flex justify-center'>
            <img src={team2} className='h-auto w-full max-w-xs rounded-lg shadow-lg' />
          </div>
        </section>
      </div>


      {/* last section */}
      <section className='p-8 mb-20 bg-gray-100'>
        <div className='max-w-3xl mx-auto'>
          <div className='p-4 text-start'>
            <h1 className='text-3xl font-bold text-black mb-2'>Lorem Ipsum</h1>
            <p className='text-gray-600 mt-6'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className='mt-10 bg-[#6F6A42] p-6 rounded-lg shadow-lg md:flex md:items-center md:justify-between md:gap-x-8'>
            {/* Left Side (h1 and p tags) */}
            <div className='md:w-1/2 mb-4 md:mb-0'>
              <h1 className='text-2xl font-semibold text-white mb-2'>Stay in the loop</h1>
              <p className='text-white'>
                Subscribe to receive the latest news and updates about TDA. We promise not to spam you!
              </p>
            </div>
            {/* Right Side (Input and Button) */}
            <div className='md:w-1/2 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full md:w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6F6A42]'
              />
              <button className='w-full md:w-auto px-4 py-2 bg-[#5b5636] text-white font-semibold rounded-md hover:bg-[#5b5932]'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>


    </>


  );
};

export default Aboutus;
