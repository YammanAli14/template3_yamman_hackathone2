import React from 'react';
import Image from 'next/image';

function NikeShoeComponent() {
  return (
    <div className="relative bg-white h-screen flex flex-col items-center justify-start p-4">
      {/* Top Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 bg-white border-b shadow-md z-10">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image src="/Vector.svg" alt="Logo" width={32} height={32} />
            </div>
            <ul className="hidden md:flex space-x-6">
              <li className="hover:underline cursor-pointer">New & Featured</li>
              <li className="hover:underline cursor-pointer">Men</li>
              <li className="hover:underline cursor-pointer">Women</li>
              <li className="hover:underline cursor-pointer">Kids</li>
              <li className="hover:underline cursor-pointer">Sale</li>
              <li className="hover:underline cursor-pointer">SNKRS</li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block p-2 border rounded-md"
            />
            <button className="hover:text-gray-600">Join Us</button>
            <button className="hover:text-gray-600">Sign In</button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto mt-20 md:mt-20 relative">
      <h2 className='ml-[40%] font-bold'>Hello Nike App</h2>
      <h4 className='ml-[25%]'>download The App To Access The EveryThing Nike.  <a className='underline'>Get the Great</a></h4>


        <img
          src="/Image.svg" // Replace this with your image path
          alt="Nike Shoe"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Hero Content */}
      <div className="text-center py-12 md:py-20">
        <p className="text-sm font-medium text-gray-500">First Look</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4">NIKE AIR MAX PULSE</h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto text-lg md:text-xl">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300">
            Notify Me
          </button>
          <button className="bg-white border border-black px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="max-w-6xl mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Best of Air Max</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="border p-4 rounded-md text-center hover:shadow-lg transition duration-300"
            >
              <Image
                src="/Image.svg" // Replace with the product image path
                alt="Nike Air Max"
                width={200}
                height={150}
                className="mx-auto rounded-lg"
              />
              <h3 className="mt-4 font-semibold text-lg">Nike Air Max Pulse</h3>
              <p className="text-gray-500">Men's Shoes</p>
              <p className="font-bold mt-2 text-xl">₹ 13,995</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex justify-center items-center space-x-4 mt-8 mb-16">
        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-300">
          <span className="text-xl">&#8249;</span>
        </button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Shop
        </button>
        <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-300">
          <span className="text-xl">&#8250;</span>
        </button>
      </div>
      <h2><strong>Featured</strong></h2>
      <div className="w-full max-w-6xl mx-auto mt-10 md:mt-10 relative">
        <img
          src="/girl.svg" // Replace this with your image path
          alt="Nike Shoe"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
    
  );
}

export default NikeShoeComponent;
