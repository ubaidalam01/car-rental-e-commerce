"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import sanityClient from "@/sanityClient";
import { Car } from "@/app/types";

const CarCards = () => {
  const [carCards, setCarCards] = useState<Car[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState<string | null>(null); // State for error handling

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
        setError(null); // Clear any previous error if successful
      } catch (err) {
        console.error("Error fetching car data:", err);
        setError(
          "We encountered a problem while fetching the data. Please try again."
        );
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
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Failed to load cars
        </h1>
        <p className="text-gray-600 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-[#3563E9] text-white px-6 py-2 text-sm font-medium rounded-md border border-[#3563E9] hover:bg-blue-600 hover:border-blue-700 active:bg-blue-700 active:border-blue-800 transition-all duration-200"
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
    <div className="bg-[#FFFFFF]">
      {/* Mobile View */}
      <div className="relative block sm:hidden">
        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-gray-300 text-white p-2 rounded-full shadow-md hover:bg-gray-400"
          >
            &#10094;
          </button>
          {carCards.map((car, index) => (
            <div
              key={car._id}
              className={`w-[295px] h-auto rounded-lg overflow-hidden shadow-lg p-6 transition-transform duration-500 hover:shadow-xl hover:scale-105 ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-800 p-4">
                  {car.name}
                </h2>
                <Image src="/heart.svg" alt="Heart Icon" width={24} height={24} />
              </div>
              <h2 className="text-[#90A3BF] ml-4">{car.brand}</h2>
              <Image
                src={car.imageUrl}
                alt="Car"
                className="object-cover mt-4"
                width={295}
                height={200}
              />
              <div className="p-4">
                <p className="text-[#90A3BF] mb-2">
                  Brand:{" "}
                  <span className="font-bold text-gray-800">{car.brand}</span>
                </p>
                <p className="text-[#90A3BF] mb-2">
                  Transmission:{" "}
                  <span className="font-bold text-gray-800">
                    {car.transmission}
                  </span>
                </p>
                <p className="text-[#90A3BF] mb-2">
                  Seating Capacity:{" "}
                  <span className="font-bold text-gray-800">
                    {car.seatingCapacity} seats
                  </span>
                </p>
                <p className="text-[#90A3BF] mb-2">
                  Fuel Capacity:{" "}
                  <span className="font-bold text-gray-800">
                    {car.fuelCapacity}L
                  </span>
                </p>
                <p className="text-[#90A3BF] mb-4">
                  Tags:{" "}
                  <span className="font-bold text-gray-800">
                    {car.tags?.join(", ")}
                  </span>
                </p>
                <div className="flex items-center justify-between mt-4 gap-2">
                  <p className="text-lg font-bold">${car.pricePerDay}/day</p>
                  <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                    <Link href={`/card/${car._id}`}>Rent now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-gray-300 text-white p-2 rounded-full shadow-md hover:bg-gray-400"
          >
            &#10095;
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block p-4">
        <h1 className="text-[#90A3BF] text-3xl font-bold text-start">
          Popular Cars
        </h1>
        <h1 className="text-[#3563E9] text-end font-bold">View all</h1>
        <div className="flex space-x-6">
          {carCards.map((car) => (
            <div
              key={car._id}
              className="w-[295px] rounded-lg overflow-hidden shadow-lg bg-lime p-6 transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-gray-800 p-4">
                  {car.name}
                </h2>
                <Image src="/heart.svg" alt="Heart" width={24} height={24} />
              </div>
              <h2 className="text-[#90A3BF] ml-4">{car.brand}</h2>
              <Image
                src={car.imageUrl}
                alt="Car"
                className="object-cover mt-4"
                width={295}
                height={200}
              />
              <div className="p-4">
                <p className="text-[#90A3BF] mb-2">
                  Brand:{" "}
                  <span className="font-bold text-gray-800">{car.brand}</span>
                </p>
                <p className="text-[#90A3BF] mb-2">
                  Transmission:{" "}
                  <span className="font-bold text-gray-800">
                    {car.transmission}
                  </span>
                </p>
                <p className="text-[#90A3BF] mb-2">
                  Seating Capacity:{" "}
                  <span className="font-bold text-gray-800">
                    {car.seatingCapacity}
                  </span>
                </p>
                <p className="text-[#90A3BF] mb-2">
                  Fuel Capacity:{" "}
                  <span className="font-bold text-gray-800">
                    {car.fuelCapacity}
                  </span>
                </p>
                <p className="text-[#90A3BF] mb-4">
                  Tags:{" "}
                  <span className="font-bold text-gray-800">
                    {car.tags?.join(", ")}
                  </span>
                </p>
                <div className="flex items-center justify-between mt-4 gap-2">
                  <p className="text-lg font-bold text-gray-800">
                    ${car.pricePerDay}/
                    <span className="text-[#90A3BF]">day</span>
                  </p>
                  <Link href={`/card/${car._id}`}>
                    <button className="bg-blue-600 text-white w-[116px] h-[44px] rounded-md hover:bg-blue-700 transition">
                      Rent now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCards;
