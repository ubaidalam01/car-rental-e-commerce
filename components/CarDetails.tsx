"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import sanityClient from "@/sanityClient";
import type { CarDetails } from "@/app/CarDetails";
import Link from "next/link";
import PreviewCar from "./PreviewCar";
import ReviewsSection from "./ReviewSection";
import Aside from "./Aside";

const CarDetailsPage = ({ productId }: { productId: string }) => {
  const [productDetails, setProductDetails] = useState<CarDetails | null>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const query = `
        *[_type == "car" && _id == $productId][0] {
          name,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          briefDesc,
          pricePerDay,
          "imageUrl": image.asset->url
        }
      `;

      try {
        const result = await sanityClient.fetch(query, { productId });
        setProductDetails(result);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!productDetails) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar - Hidden on Mobile */}
      <Aside />
      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        <div className="flex flex-col items-center justify-start p-6 md:flex-row">
          {/* Car Images Section */}
          <div className="w-full lg:w-1/2 bg-white  p-6 rounded-lg mb-8">
            <Image
              src={productDetails.imageUrl || "/placeholder.svg"}
              alt={`Image of ${productDetails.name}`}
              width={800}
              height={400}
              className="w-full rounded-lg object-cover"
            />
            <div className="flex flex-row gap-2 mt-4 justify-center">
              <Image
                src={productDetails.imageUrl || "/placeholder.svg"}
                alt="Thumbnail 1"
                width={148}
                height={124}
                className="h-[100px] w-[120px] md:h-[124px] md:w-[148px] rounded-lg border border-gray-300"
              />
              <Image
                src={productDetails.imageUrl || "/placeholder.svg"}
                alt="Thumbnail 2"
                width={148}
                height={124}
                className="h-[100px] w-[120px] md:h-[124px] md:w-[148px] rounded-lg border border-gray-300"
              />
              <Image
                src={productDetails.imageUrl || "/placeholder.svg"}
                alt="Thumbnail 3"
                width={148}
                height={124}
                className="h-[100px] w-[120px] md:h-[124px] md:w-[148px] rounded-lg border border-gray-300"
              />
            </div>
          </div>

          {/* Car Details Section */}
          <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="flex justify-between text-[28px] md:text-[40px] font-bold">
              {productDetails.name}{" "}
              <Image src="/heart.svg" alt="Heart Icon" width={24} height={24} />
            </h3>
            <p className="text-gray-500 text-sm">⭐⭐⭐⭐⭐ (420+ Reviews)</p>
            <p className="text-base md:text-xl text-gray-600 mt-2">
              {productDetails.briefDesc}
            </p>
            <div className="flex flex-col md:flex-row mt-4 gap-6">
              <div className="flex flex-col gap-4 md:gap-8">
                <p className="text-sm md:text-[16px] text-gray-600">
                  <strong>Type Car:</strong> {productDetails.type}
                </p>
                <p className="text-sm md:text-[16px] text-gray-600">
                  <strong>Steering:</strong> {productDetails.transmission}
                </p>
              </div>
              <div className="flex flex-col gap-4 md:gap-8">
                <p className="text-sm md:text-[16px] text-gray-600">
                  <strong>Capacity:</strong> {productDetails.seatingCapacity}
                </p>
                <p className="text-sm md:text-[16px] text-gray-600">
                  <strong>Gasoline:</strong> {productDetails.fuelCapacity}
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-base md:text-lg font-bold text-black">
                  ${productDetails.pricePerDay}/
                  <span className="text-[#90A3BF] text-sm">day</span>
                </p>
                <p className="text-xs md:text-sm text-[#90A3BF] line-through">
                  ${productDetails.pricePerDay}
                </p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
  <Link
    href={{
      pathname: "/Payment",
      query: {
        name: productDetails.name,
        type: productDetails.type,
        transmission: productDetails.transmission,
        seatingCapacity: productDetails.seatingCapacity,
        fuelCapacity: productDetails.fuelCapacity,
        briefDesc: productDetails.briefDesc,
        pricePerDay: productDetails.pricePerDay,
        imageUrl: productDetails.imageUrl,
      },
    }}
  >
    Rent Now
  </Link>
</button>

            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="w-full lg:w-3/4 mb-8">
          <ReviewsSection />
        </div>

        {/* Preview Car Component */}
        <div className="w-full  mb-8">
          <PreviewCar />
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
