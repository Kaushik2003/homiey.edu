import Link from "next/link";
import React from "react";

const CourseMarketPlaceCard = () => {
  return (
    <div className="group relative p-6 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
      <span className="material-symbols-outlined text-5xl text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        token
      </span>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
        NFT Course Marketplace
      </h3>
      <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
        Discover and purchase unique courses as NFTs with secure blockchain
        technology.
      </p>
      <Link
        href="/course-marketplace"
        className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 group-hover:shadow-lg"
      >
        <span>Browse Marketplace</span>
        <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">
        
        </span>
      </Link>
    </div>
  );
};

export default CourseMarketPlaceCard;
