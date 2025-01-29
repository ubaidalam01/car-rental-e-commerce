// 'use client'
// import { useSearchParams } from "next/navigation";
// import Image from 'next/image';

// const Payment = () => {
//   const searchParams = useSearchParams();
  
//   // Get query parameters
//   const name = searchParams.get('name');
//   const type = searchParams.get('type');
//   const pricePerDay = searchParams.get('pricePerDay');
//   const imageUrl = searchParams.get('imageUrl');

//   return (
//     <div className="flex flex-col justify-between gap-8 px-4 py-6 bg-gray-100">
//       <div className="flex flex-col-reverse md:flex-row gap-2">
//         {/* Billing Info Section */}
//         <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
//           <h2 className="text-xl font-bold mb-4">Billing Info</h2>
//           <h2 className="text-[#90A3BF]">Please enter your billing info</h2>
//           {/* Billing Form */}
//           <form>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-black mb-1">Name</label>
//                 <input
//                   type="text"
//                   className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
//                   placeholder="Your Name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-black mb-1">Phone Number</label>
//                 <input
//                   type="text"
//                   className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
//                   placeholder="Your Phone"
//                 />
//               </div>
//               <div>
//                 <label className="block text-black mb-1">Address</label>
//                 <input
//                   type="text"
//                   className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
//                   placeholder="Your Address"
//                 />
//               </div>
//               <div>
//                 <label className="block text-black mb-1">Town/City</label>
//                 <input
//                   type="text"
//                   className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
//                   placeholder="City"
//                 />
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* Rental Summary Section */}
//         <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-md">
//           <h2 className="text-xl font-bold mb-4">Rental Summary</h2>
//           <div className="flex items-center gap-4">
//             <Image
//               src={imageUrl || "/placeholder.svg"}
//               alt={name || "Car Image"}
//               className="object-cover rounded-md"
//               width={80} 
//               height={80}
//             />
//             <div>
//               <h3 className="text-lg font-bold">{name}</h3>
//               <p className="text-gray-500 text-sm">{type}</p>
//             </div>
//           </div>
//           <div className="mt-4">
//             <div className="flex justify-between">
//               <p className="text-gray-600">Subtotal:</p>
//               <p className="font-bold">${pricePerDay}</p>
//             </div>
//             <div className="flex justify-between mt-2">
//               <p className="text-gray-600">Tax:</p>
//               <p className="font-bold">$0.00</p>
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 className="w-[295px] h-[40px] bg-[#F6F7F9] rounded-lg rounded-r-none"
//                 placeholder="Apply promo code"
//               />
//               <button className="bg-[#F6F7F9] rounded-lg h-[40px]">
//                 Apply Now
//               </button>
//             </div>
//             <div className="flex justify-between mt-4 text-lg font-bold">
//               <p className="text-xl">Total Rental Price:</p>
//               <p>${pricePerDay}</p>
//             </div>
//           </div>
//           <p className="text-gray-500">
//             Overall price includes rental discount
//           </p>
//         </div>
//       </div>

//       {/* Rental Info Section */}
//       <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">Rental Info</h2>
//         <h2 className='text-[#90A3BF] mb-2'>Please select your rental date</h2>
//         <form>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-600 mb-1">Pickup Location</label>
//               <input
//                 type="text"
//                 className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
//                 placeholder="Enter Pickup Location"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1">Pickup Date</label>
//               <input
//                 type="date"
//                 className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1">Return Location</label>
//               <input
//                 type="text"
//                 className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
//                 placeholder="Enter Return Location"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 mb-1">Return Date</label>
//               <input
//                 type="date"
//                 className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
//               />
//             </div>
//           </div>
//         </form>
//       </div>

//       {/* Payment Method Section */}
//       <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold text-gray-800">Payment Method</h2>
//           <p className="text-sm text-gray-500">Step 3 of 4</p>
//         </div>
//         <p className="text-sm text-[#90A3BF] mb-6">Please enter your payment method</p>
//         <div className="border p-4 rounded-lg bg-gray-50">
//           <div className="flex items-center justify-between mb-4">
//             <label className="flex items-center">
//               <span className='mr-1'>
//                 <Image src="/mark.svg" alt="Mark" width={16} height={16} />
//               </span>
//               <span className="text-gray-800 font-medium">Credit Card</span>
//             </label>
//             <div className="flex space-x-2">
//               <Image src="/Visa.svg" alt="Visa" width={32} height={20} />
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm text-gray-500 mb-1">Card Number</label>
//               <input
//                 type="text"
//                 placeholder="Card number"
//                 className="w-full h-[56px] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-500 mb-1">Expiration Date</label>
//               <input
//                 type="text"
//                 placeholder="DD / MM / YY"
//                 className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-500 mb-1">Card Holder</label>
//               <input
//                 type="text"
//                 placeholder="Card holder"
//                 className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-gray-500 mb-1">CVC</label>
//               <input
//                 type="text"
//                 placeholder="CVC"
//                 className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
//           <label className="flex items-center">
//             <input type="radio" name="payment-method" className="h-[40px] bg-[#F6F7F9] mr-2" />
//             <span className="text-gray-800 font-medium">PayPal</span>
//           </label>
//           <Image src="/PayPal.svg" alt="PayPal" width={32} height={20} />
//         </div>
//         <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
//           <label className="flex items-center">
//             <input type="radio" name="payment-method" className="h-[40px] bg-[#F6F7F9] mr-2" />
//             <span className="text-gray-800 font-medium">Bitcoin</span>
//           </label>
//           <Image src="/Bitcoin.svg" alt="Bitcoin" width={32} height={20} />
//         </div>
//       </div>

//       {/* Continue Button */}
//       <div className="flex justify-between mt-8">

//           <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">Rent now</button>

//       </div>
//     </div>
//   );
// };

// export default Payment;

'use client'; // Mark this component as client-side only
import { useSearchParams } from "next/navigation";
import Image from 'next/image';
import { Suspense } from 'react';

const Payment = () => {
  const searchParams = useSearchParams();
  
  // Get query parameters
  const name = searchParams.get('name');
  const type = searchParams.get('type');
  const pricePerDay = searchParams.get('pricePerDay');
  const imageUrl = searchParams.get('imageUrl');

  return (
    <div className="flex flex-col justify-between gap-8 px-4 py-6 bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row gap-2">
        {/* Billing Info Section */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Billing Info</h2>
          <h2 className="text-[#90A3BF]">Please enter your billing info</h2>
          {/* Billing Form */}
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-black mb-1">Name</label>
                <input
                  type="text"
                  className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-black mb-1">Phone Number</label>
                <input
                  type="text"
                  className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                  placeholder="Your Phone"
                />
              </div>
              <div>
                <label className="block text-black mb-1">Address</label>
                <input
                  type="text"
                  className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                  placeholder="Your Address"
                />
              </div>
              <div>
                <label className="block text-black mb-1">Town/City</label>
                <input
                  type="text"
                  className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                  placeholder="City"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Rental Summary Section */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Rental Summary</h2>
          <div className="flex items-center gap-4">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name || "Car Image"}
              className="object-cover rounded-md"
              width={80} 
              height={80}
            />
            <div>
              <h3 className="text-lg font-bold">{name}</h3>
              <p className="text-gray-500 text-sm">{type}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal:</p>
              <p className="font-bold">${pricePerDay}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-gray-600">Tax:</p>
              <p className="font-bold">$0.00</p>
            </div>
            <div className="flex">
              <input
                type="text"
                className="w-[295px] h-[40px] bg-[#F6F7F9] rounded-lg rounded-r-none"
                placeholder="Apply promo code"
              />
              <button className="bg-[#F6F7F9] rounded-lg h-[40px]">
                Apply Now
              </button>
            </div>
            <div className="flex justify-between mt-4 text-lg font-bold">
              <p className="text-xl">Total Rental Price:</p>
              <p>${pricePerDay}</p>
            </div>
          </div>
          <p className="text-gray-500">
            Overall price includes rental discount
          </p>
        </div>
      </div>

      {/* Rental Info Section */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Rental Info</h2>
        <h2 className='text-[#90A3BF] mb-2'>Please select your rental date</h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 mb-1">Pickup Location</label>
              <input
                type="text"
                className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                placeholder="Enter Pickup Location"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Pickup Date</label>
              <input
                type="date"
                className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Return Location</label>
              <input
                type="text"
                className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                placeholder="Enter Return Location"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Return Date</label>
              <input
                type="date"
                className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Payment Method Section */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Payment Method</h2>
          <p className="text-sm text-gray-500">Step 3 of 4</p>
        </div>
        <p className="text-sm text-[#90A3BF] mb-6">Please enter your payment method</p>
        <div className="border p-4 rounded-lg bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <span className='mr-1'>
                <Image src="/mark.svg" alt="Mark" width={16} height={16} />
              </span>
              <span className="text-gray-800 font-medium">Credit Card</span>
            </label>
            <div className="flex space-x-2">
              <Image src="/Visa.svg" alt="Visa" width={32} height={20} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Card Number</label>
              <input
                type="text"
                placeholder="Card number"
                className="w-full h-[56px] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Expiration Date</label>
              <input
                type="text"
                placeholder="DD / MM / YY"
                className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Card Holder</label>
              <input
                type="text"
                placeholder="Card holder"
                className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">CVC</label>
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-2 h-[56px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="h-[40px] bg-[#F6F7F9] mr-2" />
            <span className="text-gray-800 font-medium">PayPal</span>
          </label>
          <Image src="/PayPal.svg" alt="PayPal" width={32} height={20} />
        </div>
        <div className="flex items-center justify-between border p-4 rounded-lg mt-4">
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="h-[40px] bg-[#F6F7F9] mr-2" />
            <span className="text-gray-800 font-medium">Bitcoin</span>
          </label>
          <Image src="/Bitcoin.svg" alt="Bitcoin" width={32} height={20} />
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-between mt-8">
        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg">Rent now</button>
      </div>
    </div>
  );
};

// Wrap the Payment component in Suspense
const PaymentPage = () => (
  <Suspense fallback={<div>Loading payment details...</div>}>
    <Payment />
  </Suspense>
);
  
export default PaymentPage;