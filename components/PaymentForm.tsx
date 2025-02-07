"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createRentalEntry } from "@/utils/sanityApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sanitize = (input: string) => {
  if (typeof window !== "undefined") {
    const DOMPurify = require("dompurify");
    return DOMPurify.sanitize(input);
  }
  return input;
};

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }).regex(/^[a-zA-Z\s]+$/, { message: "Only letters allowed" }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits" }).regex(/^\d+$/, { message: "Only numbers allowed" }),
  address: z.string().min(1, { message: "Address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  pickupLocation: z.string().min(1, { message: "Pickup location is required" }),
  pickupDate: z.string().min(1, { message: "Pickup date is required" }),
  returnLocation: z.string().min(1, { message: "Return location is required" }),
  returnDate: z.string().min(1, { message: "Return date is required" }),
  cardNumber: z.string().length(16, { message: "Card number must be 16 digits" }).regex(/^\d+$/, { message: "Invalid card number" }),
  expirationDate: z.string().min(1, { message: "Expiration date is required" }),
  cardHolder: z.string().min(1, { message: "Card holder is required" }).regex(/^[a-zA-Z\s]+$/, { message: "Only letters allowed" }),
  cvc: z.string().length(3, { message: "CVC must be 3 digits" }).regex(/^\d+$/, { message: "Invalid CVC" }),
});

type FormData = z.infer<typeof schema>;

const Payment = () => {
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const name = sanitize(searchParams.get("name") || "");
  const type = sanitize(searchParams.get("type") || "");
  const pricePerDay = sanitize(searchParams.get("pricePerDay") || "");
  const imageUrl = sanitize(searchParams.get("imageUrl") || "");

  const onSubmit = async (data: FormData) => {
    try {
      const rentalData = {
        ...data,
        carName: name,
        carType: type,
        price: pricePerDay,
        imageUrl: imageUrl,
      };

      const response = await createRentalEntry(rentalData);
      console.log("Sanity Response:", response);
      toast.success("Your payment has been received!");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Transaction Failed!");
    }
  };

  return (
    <>
      {/* ToastContainer is always rendered */}
      <ToastContainer position="bottom-right" />

      {isSubmitted ? (
        <div className="text-center py-4">
          <h2 className="text-xl font-bold">Thank you for your payment!</h2>
          <p>You have rented: {name}</p>
          <p>Total payment: ${pricePerDay}</p>
          <button className="bg-blue-600 text-white font-medium w-[190px] h-[44px] rounded-md hover:bg-blue-700 transition mt-3">
            <Link href="/">Go Back to Home Page</Link>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between gap-8 px-4 py-6 bg-gray-100">
          {/* Billing Info Section */}
          <div className="flex flex-col-reverse md:flex-row gap-2">
            <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
              <h2 className="text-xl font-bold mb-4">Billing Info</h2>
              <h2 className="text-[#90A3BF]">Please enter your billing info</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Name", field: "name", type: "text", placeholder: "Your Name" },
                  { label: "Phone Number", field: "phone", type: "text", placeholder: "Your Phone" },
                  { label: "Address", field: "address", type: "text", placeholder: "Your Address" },
                  { label: "City", field: "city", type: "text", placeholder: "City" },
                ].map(({ label, field, type, placeholder }) => (
                  <div key={field}>
                    <label className="block text-black mb-1">{label}</label>
                    <input
                      {...register(field as keyof FormData)}
                      type={type}
                      className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md"
                      placeholder={placeholder}
                    />
                    {errors[field as keyof FormData] && (
                      <p className="text-red-500">{errors[field as keyof FormData]?.message}</p>
                    )}
                  </div>
                ))}
              </div>
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
                  <button className="bg-[#F6F7F9] rounded-lg h-[40px]">Apply Now</button>
                </div>
                <div className="flex justify-between mt-4 text-lg font-bold">
                  <p className="text-xl">Total Rental Price:</p>
                  <p>${pricePerDay}</p>
                </div>
              </div>
              <p className="text-gray-500">Overall price includes rental discount</p>
            </div>
          </div>

          {/* Rental Info Section */}
          <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Rental Info</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input {...register("pickupLocation")} type="text" placeholder="Enter Pickup Location" className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md" />
              <input {...register("pickupDate")} type="date" className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md" />
              <input {...register("returnLocation")} type="text" placeholder="Enter Return Location" className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md" />
              <input {...register("returnDate")} type="date" className="w-full h-[56px] bg-[#F6F7F9] p-2 rounded-md" />
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-bold">Payment Method</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Card Number", field: "cardNumber", placeholder: "1234 5678 9012 3456" },
                { label: "Expiration Date", field: "expirationDate", placeholder: "MM/YY" },
                { label: "Card Holder", field: "cardHolder", placeholder: "Full Name" },
                { label: "CVC", field: "cvc", placeholder: "123" },
              ].map(({ label, field, placeholder }) => (
                <div key={field}>
                  <label className="block text-sm text-gray-500">{label}</label>
                  <input
                    {...register(field as keyof FormData)}
                    type="text"
                    className="w-full p-2 h-[56px] rounded-md"
                    placeholder={placeholder}
                  />
                  {errors[field as keyof FormData] && (
                    <p className="text-red-500">{errors[field as keyof FormData]?.message}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg">
            Rent now
          </button>
        </form>
      )}
    </>
  );
};

const PaymentPage = () => (
  <Suspense fallback={<div>Loading payment details...</div>}>
    <Payment />
  </Suspense>
);

export default PaymentPage;