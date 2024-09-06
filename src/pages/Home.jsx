import React from 'react'
import h1 from '../assets/images/h1.png';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/aboutus.jpg';
import im1 from '../assets/images/im1.png';
import im2 from '../assets/images/im2.png';
import im3 from '../assets/images/im3.png';
import im4 from '../assets/images/im4.png';
import im5 from '../assets/images/im5.png';
import im6 from '../assets/images/im6.png';
import im7 from '../assets/images/im7.png';
import im8 from '../assets/images/im8.png';
import im9 from '../assets/images/im9.png';
import im10 from '../assets/images/im10.png';
import im11 from '../assets/images/im11.png';
import im12 from '../assets/images/im12.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section className='bg-[#EFE8C2]'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-4'>
          {/* Left side: Text and Button */}
          <div className='w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl font-bold mb-4 text-[#6F6A42] max-w-md mx-auto md:ml-32 leading-relaxed italic'>
              Uncover and cultivate your distinctive style
            </h1>
            <p className='text-base md:text-lg mb-6 max-w-sm mx-auto md:ml-32 leading-normal'>
              Lorem ipsum dolor sit amet consectetur.<br />
              Faucibus odio gravida amet tellus<br />
              Adipiscing donec adipiscing dignissim.
            </p>
            <button className='bg-[#6F6A42] text-white py-2 px-6 md:px-12 mt-6 md:mt-16 mx-auto md:ml-32 rounded-lg hover:bg-[#5b5932]'>
              EXPLORE NOW
            </button>
          </div>

          {/* Right side: Image */}
          <div className='w-full md:w-1/2 flex justify-center'>
            <img
              src={h1}
              alt='Hero Section'
              className='w-full max-w-lg h-auto rounded-t-5xl overflow-hidden'
              style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}
            />
          </div>
        </div>
      </section>


      {/* best selling */}
      <section className='py-10 bg-gray-50'>
        <div className='container mx-auto'>
          {/* Section title */}
          <div className='text-center mb-8'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-800'>Best Selling</h1>
            <p className='text-gray-600 mt-2'>Get in on the trend with our curated selection of best-selling styles</p>
          </div>

          {/* Products display */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {/* Product 1 */}
            <div className='bg-white p-4 rounded-lg shadow-lg text-center'>
              <img src={img1} alt='Product 1' className='w-full h-40 object-cover rounded-lg mb-4' />
              <h2 className='text-lg font-semibold mb-2'>Name of the product</h2>
              <span className='block text-xl text-gray-800'>$38.99</span>
              <div className='flex items-center justify-center mt-2'>
                <span className='text-yellow-500 mr-2'>5.0</span>
                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
              </div>
            </div>

            {/* Product 2 */}
            <div className='bg-white p-4 rounded-lg shadow-lg text-center'>
              <img src={img2} alt='Product 1' className='w-full h-40 object-cover rounded-lg mb-4' />
              <h2 className='text-lg font-semibold mb-2'>Name of the product</h2>
              <span className='block text-xl text-gray-800'>$38.99</span>
              <div className='flex items-center justify-center mt-2'>
                <span className='text-yellow-500 mr-2'>5.0</span>
                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
              </div>
            </div>

            {/* Product 3 */}
            <div className='bg-white p-4 rounded-lg shadow-lg text-center'>
              <img src={img1} alt='Product 1' className='w-full h-40 object-cover rounded-lg mb-4' />
              <h2 className='text-lg font-semibold mb-2'>Name of the product</h2>
              <span className='block text-xl text-gray-800'>$38.99</span>
              <div className='flex items-center justify-center mt-2'>
                <span className='text-yellow-500 mr-2'>5.0</span>
                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
              </div>
            </div>

            {/* Product 4 */}
            <div className='bg-white p-4 rounded-lg shadow-lg text-center'>
              <img src={img2} alt='Product 1' className='w-full h-40 object-cover rounded-lg mb-4' />
              <h2 className='text-lg font-semibold mb-2'>Name of the product</h2>
              <span className='block text-xl text-gray-800'>$38.99</span>
              <div className='flex items-center justify-center mt-2'>
                <span className='text-yellow-500 mr-2'>5.0</span>
                <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-8'>
            <button className='bg-gray-800 text-white py-2 px-6 rounded-lg flex items-center hover:bg-gray-700'>
              See More
              <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
            </button>
          </div>
        </div>
      </section>


      {/* best selling 2 */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Best Selling</h1>
            <ul className="flex justify-center space-x-4 mt-4 text-gray-600">
              <li className="hover:text-gray-800 hover:underline cursor-pointer">SALE</li>
              <li className="hover:text-gray-800 hover:underline cursor-pointer">HOT</li>
              <li className="hover:text-gray-800 hover:underline cursor-pointer">NEW ARRIVAL</li>
              <li className="hover:text-gray-800 hover:underline cursor-pointer">ACCESSORIES</li>
            </ul>
          </div>

          {/* Products Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product Items */}
            {[im1, im2, im3, im4, im5, im6, im7, im8].map((image, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
                <p className="text-lg font-semibold mb-2">Product Title {index + 1}</p>
                <span className="block text-xl text-gray-800 mb-2">$38.99</span>
                <div className="flex items-center justify-center">
                  <span className="text-yellow-500 mr-2">5.0</span>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/*exclusive offer  */}
      <section className="py-12 bg-[#EFE8C2]">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image on the left */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center md:justify-start">
            <img src={im9} alt="Exclusive Offer" className="w-full max-w-xs md:max-w-lg h-auto object-cover rounded-lg shadow-md" />
          </div>

          {/* Content on the right */}
          <div className="md:w-1/2 w-full md:pl-8 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold text-[#6F6A42] mb-4">Exclusive Offer</h1>
            <p className="text-md md:text-lg font-semibold text-[#6F6A42] mb-6 leading-loose w-full max-w-md mx-auto md:mx-0">
              Unlock the unlimited style upgrade with our exclusive offer. Enjoy savings of up to 40% off on your latest
              <br /> New Arrivals.
            </p>

            {/* Countdown */}
            <div className="flex justify-center md:justify-start space-x-4 text-gray-800 mb-6">
              <div className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-md text-center">
                <div className="text-lg md:text-xl font-semibold">05</div>
                <div className="text-xs md:text-sm">days</div>
              </div>
              <div className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-md text-center">
                <div className="text-lg md:text-xl font-semibold">17</div>
                <div className="text-xs md:text-sm">hours</div>
              </div>
              <div className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-md text-center">
                <div className="text-lg md:text-xl font-semibold">20</div>
                <div className="text-xs md:text-sm">min</div>
              </div>
            </div>

            {/* Button */}
            <div>
              <button className="bg-[#363321] text-white px-8 py-2 md:px-12 md:py-3 rounded-lg shadow-lg hover:bg-[#4f4a30]">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cool ans trendy clothes for you */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#6F6A42]">Cool & Trendy Clothes For You</h1>
            <p className="text-[#6F6A42] mb-6 sm:mb-10 text-sm sm:text-base mt-10">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          {/* Product Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Item 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <img
                src={im10}
                alt="Accessories 1"
                className="w-full h-72 sm:h-80 md:h-[32rem] object-cover rounded-md mb-4"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">Accessories</h2>
              <p className="text-gray-900 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Mi enim a curabitur odio risus donec quis donec vel.
              </p>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <img
                src={im11}
                alt="Accessories 2"
                className="w-full h-72 sm:h-80 md:h-[32rem] object-cover rounded-md mb-4"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">Accessories</h2>
              <p className="text-gray-900 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Mi enim a curabitur odio risus donec quis donec vel.
              </p>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
              <img
                src={im12}
                alt="Accessories 3"
                className="w-full h-72 sm:h-80 md:h-[32rem] object-cover rounded-md mb-4"
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">Accessories</h2>
              <p className="text-gray-900 text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur. Mi enim a curabitur odio risus donec quis donec vel.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* client feedback */}

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#6F6A42]">Clients Feedback</h1>
          </div>

          {/* Feedback Items */}
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
            {/* Feedback Item 1 */}
            <div className="bg-[#EFE8C2] hover:bg-[#f1e9b7] p-6 rounded-lg shadow-lg text-center flex-1">
              <div className="text-start ml-2 text-4xl font-bold text-gray-500 mb-4">"</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Maria Shabbir</h2>
              <p className="text-gray-600">
                The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth and the clothes I ordered fit perfectly. I’m beyond satisfied!
              </p>
            </div>

            {/* Feedback Item 2 */}
            <div className="bg-[#EFE8C2] hover:bg-[#f1e9b7] p-6 rounded-lg shadow-lg text-center flex-1">
              <div className="text-start ml-2 text-4xl font-bold text-gray-500 mb-4">"</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Beenish Mumtaz</h2>
              <p className="text-gray-600">
                I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!
              </p>
            </div>

            {/* Feedback Item 3 */}
            <div className="bg-[#EFE8C2] hover:bg-[#f1e9b7] p-6 rounded-lg shadow-lg text-center flex-1">
              <div className="text-start ml-2 text-4xl font-bold text-gray-500 mb-4">"</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Ayra Khan</h2>
              <p className="text-gray-600">
                I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <span className=" bg-[#EFE8C2] hover:bg-[#f1e9b7] px-6 py-1 rounded-xl text-gray-600 cursor-pointer hover:text-gray-800 text-4xl">&lt;</span>
            <span className=" bg-[#EFE8C2] hover:bg-[#f1e9b7] px-6 py-1 rounded-xl text-gray-600 cursor-pointer hover:text-gray-800 text-4xl">&gt;</span>
          </div>
        </div>
      </section>






    </>
  )
}

export default Home