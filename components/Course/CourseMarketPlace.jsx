import React from "react";
import CourseCreationCard from "../ui/CourseCreationCard";
import CourseMarketPlaceCard from "../ui/CourseMarketPlaceCard";

import FeaturedCourses from "../ui/FeaturedCourses";
import Component from "../Component";
import CertificateMintingForm from "../ui/MintCertificate";

export const CourseMarketPlace = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full flex justify-center">
        <div className="w-[1280px] bg-gray-900 text-white font-sans min-h-screen">
          <div className="flex h-screen">
            {/* Sidebar */}

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto bg-gray-900">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Welcome to CourseChain</h1>
                <div className="flex items-center space-x-4">
                  
				  
				
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 mb-12">
                <div className="p-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">Choose Your Path</h2>
                  <p className="text-gray-300 mb-6">
                    Select how you want to engage with our platform today
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Course Creator Card */}
                    <CourseCreationCard />

                    {/* NFT Marketplace Card */}
                    <CourseMarketPlaceCard />
                  </div>
                </div>
              </div>

              {/* <CertificateMintingForm/> */}
              <FeaturedCourses/>
              {/* <Component/> */}
              
              
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
