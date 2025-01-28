"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import sanityClient from "@/sanityClient";
import { CarDetails } from "@/app/CarDetails";

const CarDetailsPage = () => {
  const [carDetails, setCarDetails] = useState<CarDetails | null>(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      const query = `
        *[_type == "carDetails"][0] {
          title,
          description,
          pricePerDay,
          "imageUrl": image.asset->url
        }
      `;
      try {
        const result = await sanityClient.fetch(query);
        setCarDetails(result);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarDetails();
  }, []);

  if (!carDetails) {
    return <p>Loading car details...</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-md shadow-lg flex">
      <div className="w-1/2">
        <Image
          src={carDetails.imageUrl}
          alt={carDetails.title}
          width={800}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="w-1/2 ml-6">
        <h1 className="text-3xl font-bold">{carDetails.title}</h1>
        {/* <p className="text-gray-600 mt-2">{carDetails.description}</p> */}
        <p className="text-black text-xl font-bold mt-4">
          ${carDetails.pricePerDay}<span className="text-gray-400">/day</span>
          <span></span>
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-md hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarDetailsPage;
