"use client"

import React, { useEffect, useState } from "react"
import client from "../sanityClient"
import Image from "next/image"
import Link from "next/link"
import type { Car } from "@/app/types"
import { FiHeart } from "react-icons/fi"

const PreviewCar = () => {
  const [cars, setCars] = useState<Car[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true)
      try {
        const query = `*[_type == "car"][0...4]{
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
                }` // Fetch only the first 6 cars
        const data = await client.fetch(query)
        setCars(data)
      } catch (error) {
        console.error("Failed to fetch cars:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCars()
  }, [])

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen p-4 bg-[#FFFFFF]">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[#90A3BF] text-3xl font-bold">Recommendation Cars</h1>
          <Link href="/all-cars" className="text-[#3563E9] font-bold">
            View all
          </Link>
        </div>
      </div>

      {cars.length === 0 ? (
        <div className="text-center text-gray-500 mt-8">No cars found matching your search.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {cars.map((car) => (
            <div key={car._id} className="w-[295px] h-auto rounded-lg overflow-hidden shadow-lg bg-lime p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 p-4">{car.name}</h2>
                <button><FiHeart/></button>
              </div>
              <h2 className="text-[#90A3BF] ml-4">{car.type}</h2>
              <Image
                src={car.imageUrl || "/placeholder.svg"}
                alt={car.name}
                className="object-cover mt-4 rounded-md"
                width={295}
                height={150}
              />
              <div className="p-4">
                <p className="text-[#90A3BF] mb-2">
                  Brand: <span className="font-bold text-gray-800">{car.brand}</span>
                </p>
                <p className="text-[#90A3BF] mb-2">
                  Transmission: <span className="font-bold text-gray-800">{car.transmission}</span>
                </p>
                <p className="text-[#90A3BF] mb-2">
                  Seating Capacity: <span className="font-bold text-gray-800">{car.seatingCapacity}</span>
                </p>
                <p className="text-[#90A3BF] mb-2">
                  Fuel Capacity: <span className="font-bold text-gray-800">{car.fuelCapacity}</span>
                </p>
                <p className="text-[#90A3BF] mb-4">
                  Tags: <span className="font-bold text-gray-800">{car.tags?.join(", ")}</span>
                </p>
                <div className="flex items-center justify-between mt-4 gap-2">
                  <p className="text-lg font-bold text-gray-800">
                    ${car.pricePerDay}/<span className="text-[#90A3BF]">day</span>
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
      )}
      <div className='flex items-center justify-center'>
        <button className="bg-blue-600 text-white font-medium w-[150px] h-[44px] rounded-md hover:bg-blue-700 transition mt-6">
                <Link href="/Listing">Show more Car</Link>
        </button>
      </div>
    </div>
  )
}

export default PreviewCar
