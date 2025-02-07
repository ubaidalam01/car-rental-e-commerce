  'use client'
  import React, { useEffect, useState } from "react"
  import client from "../sanityClient"
  import Image from "next/image"
  import Link from "next/link"
  import type { Car } from "@/app/types"
  import { FiSearch, FiHeart } from "react-icons/fi"
  
  const Recomend = () => {
    const [cars, setCars] = useState<Car[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
  
    useEffect(() => {
      const fetchCars = async () => {
        setIsLoading(true)
        setHasError(false)
        try {
          const query = `*[_type == "car"][0...8]{
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
                  }`
          const data = await client.fetch(query)
          setCars(data)
        } catch (error) {
          console.error("Failed to fetch cars:", error)
          setHasError(true)
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchCars()
    }, [])
  
    const filteredCars = cars.filter(
      (car) =>
        (car.name?.toLowerCase().includes(searchTerm.toLowerCase()) || '') ||
        (car.brand?.toLowerCase().includes(searchTerm.toLowerCase()) || '') ||
        (car.type?.toLowerCase().includes(searchTerm.toLowerCase()) || '')
    )
  
    if (isLoading) {
      return  <div className="flex justify-center items-center h-screen">
          <p className="text-gray-600 text-lg font-semibold">Loading cars...</p>
        </div>
    }
  
    if (hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Failed to load cars</h1>
          <p className="text-gray-600 mb-6">
            We encountered a problem while fetching the data. Please try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#3563E9] text-white px-6 py-2 text-sm font-medium rounded-md border border-[#3563E9] hover:bg-blue-600 hover:border-blue-700 active:bg-blue-700 active:border-blue-800 transition-all duration-200"
          >
            Retry
          </button>
        </div>
      )
    }
  
    return (
      <div className="min-h-screen p-4 bg-white">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-[#90A3BF] text-3xl font-bold">Recommendation Cars</h1>
            <Link href="/all-cars" className="text-[#3563E9] font-bold">
              View all
            </Link>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
  
        {filteredCars.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">No cars found matching your search.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {filteredCars.map((car) => (
              <div
                key={car._id}
                className="w-[295px] h-[350px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105 p-6"
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
                      <span>{car.fuelCapacity}</span>
                    </div>
                    <div className="flex gap-1">
                      <Image src="/Car.png" alt="Car Specs" width={24} height={24} />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex gap-1">
                      <Image src="/mini.png" alt="Car Specs" width={24} height={24} />
                      <span>{car.seatingCapacity}</span>
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
        )}
        <div className="flex items-center justify-center">
          <button className="bg-blue-600 text-white font-medium w-[150px] h-[44px] rounded-md hover:bg-blue-700 transition mt-6">
            <Link href="/Listing">Show more Cars</Link>
          </button>
        </div>
      </div>
    )
  }
  
  export default Recomend
  