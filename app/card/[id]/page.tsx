// import client from "@/sanityClient"; // Import the Sanity client
// import { groq } from "next-sanity";

// type Params = {
//   id: string; // Assuming you fetch the car data by ID
// };

// const cardpost = async (params: Params) => {
//   // Fetch the car details from Sanity using the provided ID
//   const query = groq`*[_type == "car" && _id == $id][0]{
//     title,
//     price,
//     image,
//     pricePerDay,
//     transmission,
//     seatingCapacity,
//     fuelCapacity
//   }`;

//   const response = await client.fetch(query, { id: params.id }); // Pass the id parameter here

//   if (!response) {
//     return <p>Car details not found!</p>;
//   }

//   return (
//     <div className="mt-6 space-y-4 text-lg">
//       {/* Title */}
//       <h2 className="text-2xl font-bold text-gray-900">{response.title}</h2>

//       {/* Price per Day */}
//       <p className="flex items-center gap-3">
//         <span className="font-semibold text-gray-800">Price per Day:</span>
//         <span className="bg-blue-100 text-blue-600 font-bold py-1 px-3 rounded-lg shadow-sm">
//           {response.pricePerDay}
//         </span>
//       </p>

//       {/* Transmission */}
//       <p className="flex items-center gap-3">
//         <span className="font-semibold text-gray-800">Transmission:</span>
//         <span className="text-gray-700">{response.transmission}</span>
//       </p>

//       {/* Seating Capacity */}
//       <p className="flex items-center gap-3">
//         <span className="font-semibold text-gray-800">Seating Capacity:</span>
//         <span className="text-gray-700">{response.seatingCapacity}</span>
//       </p>

//       {/* Fuel Capacity */}
//       <p className="flex items-center gap-3">
//         <span className="font-semibold text-gray-800">Fuel Capacity:</span>
//         <span className="text-gray-700">{response.fuelCapacity}</span>
//       </p>

//       {/* Rent Now Button */}
//       <div className="flex justify-center lg:justify-start mt-10">
//         <a href="/payment">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-lg text-lg font-semibold shadow-lg transition-all">
//             Rent Now
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default cardpost;


import CarDetailsPage from "@/components/CarDetails";

interface Iparams {

id: string;

}

export default async function ProductDetailsPage ({ params }: { params: Promise<Iparams> }) {

const { id } = await params;

return (

<CarDetailsPage productId={id} />

);

};