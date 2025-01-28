import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='min-w-full flex justify-center mt-4 bg-white'>
      <div className='flex flex-col sm:flex-row gap-5'>
        {/* Left image */}
        <div className='w-[327px] h-[232px] sm:w-[640px] sm:h-[360px] bg-gradient-to-br from-[#54A6FF] to-[#2C82FF] rounded-[10px] relative overflow-hidden p-6 sm:p-8'>
          {/* Text Content */}
          <div className='max-w-[200px] sm:max-w-[300px] relative z-10'>
            <h1 className='text-white text-[24px] sm:text-[40px] font-bold leading-tight mb-4'>
              The Best Platform for Car Rental
            </h1>
            <p className='text-white/80 text-[12px] sm:text-[16px] mb-6 sm:mb-8'>
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className='bg-[#3563E9] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-[4px] text-[12px] sm:text-[16px] font-semibold hover:bg-[#2C52C5] transition-colors'>
              <Link href="/Listing">Rental Car</Link>
            </button>
          </div>

          {/* Car Image */}
          <div className='absolute bottom-0 right-0 w-[200px] sm:w-[340px]'>
            <Image 
              src="/car.svg" 
              alt="White sports car" 
              width={340} 
              height={232} 
              className='w-full h-auto object-contain'
            />
          </div>
        </div>

        {/* Right image */}
        <div className='w-[327px] h-[232px] sm:w-[640px] sm:h-[360px] bg-gradient-to-br from-[#54A6FF] to-[#2C82FF] rounded-[10px] relative overflow-hidden p-6 sm:p-8'>
          {/* Text Content */}
          <div className='max-w-[200px] sm:max-w-[300px] relative z-10'>
            <h1 className='text-white text-[24px] sm:text-[40px] font-bold leading-tight mb-4'>
              Easy way to rent a car at a low price
            </h1>
            <p className='text-white/80 text-[12px] sm:text-[16px] mb-6 sm:mb-8'>
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className='bg-[#3563E9] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-[4px] text-[12px] sm:text-[16px] font-semibold hover:bg-[#2C52C5] transition-colors'>
              <Link href="/Listing">Rental Car</Link>
            </button>
          </div>

          {/* Car Image */}
          <div className='absolute bottom-0 right-0 w-[200px] sm:w-[340px]'>
            <Image 
              src="/car1.svg" 
              alt="White sports car" 
              width={340} 
              height={232} 
              className='w-full h-auto object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;