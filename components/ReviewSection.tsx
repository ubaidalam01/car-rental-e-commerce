"use client";
import { useState } from "react";
import Image from "next/image";

type Review = {
  name: string;
  role: string;
  date: string;
  rating: number;
  comment: string;
};

function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: "Alex Stanton",
      role: "CEO at Bukalapak",
      date: "21 July 2022",
      rating: 5,
      comment: "We are very happy with the service from the MORENT App...",
    },
    {
      name: "Skylar Dias",
      role: "CEO at Amazon",
      date: "20 July 2022",
      rating: 5,
      comment:
        "We are greatly helped by the services of the MORENT Application...",
    },
  ]);

  const [newReview, setNewReview] = useState<Review>({
    name: "",
    role: "",
    date: "",
    rating: 5,
    comment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", role: "", date: "", rating: 5, comment: "" });
  };

  return (
    <section className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6 text-black">
        Reviews <span className="text-gray-500">({reviews.length})</span>
      </h2>

      {reviews.map((review, index) => (
        <div key={index} className="review mb-8">
          <div className="review-header flex items-center mb-4">
            <Image
              src={`/prof${index + 1}.svg`}
              alt={review.name}
              width={64}
              height={64}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-bold text-black">{review.name}</h3>
              <p className="text-gray-500">{review.role}</p>
              <p className="text-gray-500">{review.date}</p>
            </div>
            <div className="rating ml-4">
              <span>{"⭐".repeat(review.rating)}</span>
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={newReview.role}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            name="date"
            value={newReview.date}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="comment"
            placeholder="Comment"
            value={newReview.comment}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <span>Rating: </span>
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value={5}>⭐⭐⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
            <option value={3}>⭐⭐⭐</option>
            <option value={2}>⭐⭐</option>
            <option value={1}>⭐</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Review
        </button>
      </form>
    </section>
  );
}

export default ReviewsSection;
