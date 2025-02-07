"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import sanityClient from "@/sanityClient";
import { Car } from "@/app/types";

const CarCards = () => {
  const [carCards, setCarCards] = useState<Car[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const query = `
          *[_type == "car"] | order(pricePerDay asc)[0...4] {
            _id,
            name,
            brand,
            type,
            fuelCapacity,
            transmission,
            seatingCapacity,
            pricePerDay,
            originalPrice,
            tags,
            "imageUrl": image.asset->url
          }
        `;
        const cars = await sanityClient.fetch(query);
        setCarCards(cars);
        setError(null);
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError("We encountered a problem while fetching the data. Please try again.");
      }
    };

    fetchCars();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carCards.length) % carCards.length);
  };

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Failed to load cars</h1>
        <p className="text-gray-600 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#3563E9] text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-blue-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (carCards.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg font-semibold">Loading cars...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#90A3BF] text-3xl font-bold">Popular Cars</h1>
        <h1 className="text-[#3563E9] font-bold cursor-pointer">View all</h1>
      </div>
      <div className="relative flex overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 sm:hidden"
        >
          &#10094;
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full transition-transform duration-500">
          {carCards.map((car, index) => (
            <div
              key={car._id}
              className={`w-full max-w-[295px] rounded-lg overflow-hidden shadow-lg  bg-white p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105 ${
                index === currentSlide ? "block" : "hidden sm:block"
              }`}
            >
              <div className="flex justify-between">
                  <h2 className="text-2xl font-bold text-gray-800 p-4">{car.name}</h2>
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
                      <Image src="/gas.png" alt="Car Specs" width={24} height={24} />
                      <span className="text-black">{car.fuelCapacity}</span>
                    </div>
                    <div className="flex gap-1">
                      <Image src="/Car.png" alt="Car Specs" width={24} height={24} />
                      <span className="text-black">{car.transmission}</span>
                    </div>
                    <div className="flex gap-1">
                      <Image src="/mini.png" alt="Car Specs" width={24} height={24} />
                      <span className="text-black">{car.seatingCapacity}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 gap-2">
                    <p className="text-lg font-bold text-gray-800">
                      ${car.pricePerDay}/<span className="text-[#90A3BF]">day</span>
                    </p>
                    <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                      <Link href={`/card/${car._id}`}>Rent now</Link>
                    </button>
                  </div>
                </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 sm:hidden"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CarCards;


