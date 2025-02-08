"use client";

import React, { useEffect, useState } from "react";
import client from "../sanityClient";
import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/app/types";


const PreviewCar = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      try {
        const query = `*[_type == "car"][0...6]{
                    _id,
                    name,
                    slug,
                    brand,
                    type,
                    fuelCapacity,
                    transmission,
                    seatingCapacity,
                    pricePerDay,
                    originalPrice,
                    tags,
                    "imageUrl": image.asset->url
                }`; // Fetch only the first 6 cars
        const data = await client.fetch(query);
        setCars(data);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-[#FFFFFF]">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[#90A3BF] text-3xl font-bold">
            Recommendation Cars
          </h1>
          <Link href="/all-cars" className="text-[#3563E9] font-bold">
            View all
          </Link>
        </div>
      </div>

      {cars.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">
          No cars found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
          {cars.map((car: any) => (
            <div
              key={car._id}
              className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 p-6"
            >
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-800 p-4">
                  {car.name}
                </h2>
                <Image src="/heart.svg" alt="Heart" width={24} height={24} />
              </div>
              <h2 className="text-[#90A3BF] ml-4">{car.type}</h2>
              <Image
                src={car.imageUrl || "/placeholder.svg"}
                alt={car.name}
                className="object-cover mt-4"
                width={295}
                height={150}
              />
              <div className="mt-2">
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <Image
                      src="/gas.png"
                      alt="Car Specs"
                      width={24}
                      height={24}
                    />
                    <span className="text-black">{car.fuelCapacity}</span>
                  </div>
                  <div className="flex gap-1">
                    <Image
                      src="/Car.png"
                      alt="Car Specs"
                      width={24}
                      height={24}
                    />
                    <span className="text-black">{car.transmission}</span>
                  </div>
                  <div className="flex gap-1">
                    <Image
                      src="/mini.png"
                      alt="Car Specs"
                      width={24}
                      height={24}
                    />
                    <span className="text-black">{car.seatingCapacity}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 gap-2">
                  <p className="text-lg font-bold text-gray-800">
                    ${car.pricePerDay}/
                    <span className="text-[#90A3BF]">day</span>
                  </p>
                  <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                    <Link href={`/card/${car._id}`}>Rent now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center">
        <button className="bg-blue-600 text-white font-medium w-[150px] h-[44px] rounded-md hover:bg-blue-700 transition mt-6">
          <Link href="/Listing">Show more Car</Link>
        </button>
      </div>
    </div>
  );
};

export default PreviewCar;
