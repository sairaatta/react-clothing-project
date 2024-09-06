import React from 'react';
import img1 from '../assets/images/img1.jpg';
import { FiHeart } from 'react-icons/fi';
const Product = () => {
  return (
    <>
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-start  mb-8 bg-[#6F6A42]">
            <h1 className="text-lg sm:text-xl font-bold text-white ml-20 p-4">Ladies Top</h1>
            <p className="text-white ml-24 mt-1 ">
              Slash Sales begins in August. Get up to <span className="font-semibold text-red-500">80% Discount</span> on all products.
              <span className="hover:text-blue-500 text-white hover:underline cursor-pointer ml-1">Read More</span>
            </p>
          </div>

          {/* Sort and Products Info */}
          <div className="flex justify-between items-center mb-6 text-gray-600">
            <span>Showing 1 - 20 out of 2,356 Products</span>

            <span className="flex items-center cursor-pointer">
              Sort by: <span className="font-semibold text-gray-800 ml-1">New Arrivals</span>

              {/* Dropdown Icon */}
              <svg
                className="w-4 h-4 ml-1 fill-current text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.292 7.707a1 1 0 011.414 0L10 11.293l3.293-3.586a1 1 0 111.414 1.414l-4 4.293a1 1 0 01-1.414 0l-4-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>


          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar */}
            <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-md font-semibold mb-4">PRICES </h1>
              <div className='mb-14'>
                <span className=''>Range</span>
                <span className='ml-14 '>$120 - $300</span>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Filters</h2>
                <div className="text-gray-600 leading-loose">

                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Women
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Men
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Girls
                  </label>
                  <label className="block">
                    <input type="checkbox" className="mr-2" />
                    Babies
                  </label>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Brands</h2>
                {/* Brand Options with Checkboxes */}
                <ul className="text-gray-600 leading-loose">
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Victoria’s Secret
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Dior
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Gucci
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Fendi
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Prada
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Versace
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Dolce & Gabbana
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Zara
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Chanel
                    </label>
                  </li>
                </ul>
                <p className='text-red-600 ml-10 mt-4 text-md hover:underline font-medium'>+ 234 more</p>
              </div>

              {/* Categories */}
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Categories</h2>
                {/* Category Options with Checkboxes */}
                <ul className="text-gray-600 leading-loose">
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Dresses
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Tops
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Lingerie & Lounge Wear
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Blouse
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Vintage
                    </label>
                  </li>

                </ul>
                <p className='text-red-600 ml-10 mt-4 text-md hover:underline font-medium'>+ 4 more</p>

              </div>

              {/* size */}

              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">SIZE </h2>
                {/* Category Options with Checkboxes */}
                <ul className="text-gray-600 leading-loose">
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Medium
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Large
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Plus Size
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sexy Plus Size
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content (Products Area) */}
            <div className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Repeat the same content in all divs */}
                {[...Array(9)].map((_, index) => (
                  <div key={index} className="text-start relative"> {/* Set relative positioning to the parent container */}
                    <div className="h-64 sm:h-72 md:h-80 relative"> {/* Adjust height based on screen size */}
                      <img
                        src={img1}
                        alt="Product Image"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        className="absolute top-2 right-2 bg-gray-400 text-white border-2 border-gray-400 rounded-lg p-2 hover:text-red-500 hover:border-gray-400 focus:outline-none"
                      >
                        <FiHeart size={24} /> {/* Use FiHeart icon with a size of 24px */}
                      </button>
                    </div>
                    <p className="mt-4 text-lg font-semibold text-gray-800">
                      Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-lg font-bold text-gray-900">$120.23</span>
                      <span className="text-sm text-gray-500">22 Orders</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-400 mt-4 line-through">$120.23</p>
                  </div>
                ))}
              </div>
            </div>





          </div>

        </div>
      </section>
    </>
  );
}

export default Product;
