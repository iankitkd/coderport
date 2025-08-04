import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-1 animate-pulse">
      <div className="w-full md:w-1/3 lg:w-1/4">
        <div className="bg-gray-200"></div>
      </div>

      <div className="w-full md:w-1/3 lg:w-3/4"></div>
    </div>
  );
}
