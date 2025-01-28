import React from "react";

const Aside = () => {
  return (
    <aside className="w-1/5 bg-white p-6 shadow-lg sticky top-0 h-screen overflow-y-auto hidden md:block">
      <h3 className="text-lg font-bold mb-4">Filter Cars</h3>

      {/* Type Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Type</h4>
        <div className="space-y-2">
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
            (type, index) => (
              <label key={index} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2 rounded text-[#3563E9] focus:ring-[#3563E9]"
                />
                {type}{" "}
                <span className="ml-auto text-gray-500">({index + 10})</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Capacity Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Capacity</h4>
        <div className="space-y-2">
          {["2 Person", "4 Person", "6 Person", "8 or More"].map(
            (capacity, index) => (
              <label key={index} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  className="mr-2 rounded text-blue-500 focus:ring-[#3563E9]"
                />
                {capacity}{" "}
                <span className="ml-auto text-gray-500">({index + 10})</span>
              </label>
            )
          )}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Price</h4>
        <input
          type="range"
          className="w-full"
          min="0"
          max="100"
          defaultValue="50"
        />
        <p className="text-sm text-gray-600 mt-2">Max. $100.00</p>
      </div>
    </aside>
  );
};

export default Aside;
