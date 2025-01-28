  import React from 'react';
  import Link from 'next/link';
  import Image from 'next/image';
  import { FiSearch, FiSettings, FiHeart, FiBell } from "react-icons/fi";

  const Header = () => {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 border-b bg-white">
        <div className="flex justify-between w-full sm:w-auto mb-4 sm:mb-0">
          {/* Logo */}
          <h1 className="font-bold text-[30px] sm:text-[40px] text-[#3563E9]">
            <Link href="/">MORENT</Link>
          </h1>

          {/* Profile icon for mobile */}
          <button className="text-gray-500 sm:hidden">
          <Image src="prof.svg" alt="profile" width={44} height={44} />
          </button>
        </div>

        {/* Search Bar - Visible on all screens */}
        <div className="w-full sm:w-auto sm:flex-grow sm:max-w-2xl mb-4 sm:mb-0 sm:mx-4">
          <div className="flex items-center border rounded-full p-2 w-full">
            <FiSearch className="text-gray-500 w-5 h-5 ml-2" />
            <input
              type="text"
              placeholder="Search something here"
              className="w-full outline-none bg-transparent placeholder:text-sm mx-2"
            />
            <FiSettings className="text-gray-500 w-7 h-7 mr-2" />
          </div>
        </div>

        {/* Right-aligned icons */}
        <div className="hidden sm:flex items-center space-x-4">
          <button className="text-gray-500">
            <FiHeart size={32} />
          </button>
          <button className="text-gray-500">
            <FiBell size={32} />
          </button>
          <button className="text-gray-500">
            <FiSettings size={32} />
          </button>
          <button className="text-gray-500">
          <Image src="/prof.svg" alt="profile" width={44} height={44} />
          </button>
        </div>
      </div>
    );
  };

  export default Header;