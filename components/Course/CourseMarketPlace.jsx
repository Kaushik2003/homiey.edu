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
                  
				  
				 {/* Notifications  */}
				  {/* <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-200">
                    <span className="material-symbols-outlined">
                      notifications
                    </span>
                  </button> */}



				  {/* Profile Dropdown */}
                  {/* <div className="relative">
                    <details className="group">
                      <summary className="flex items-center cursor-pointer outline-none">
                        <img
                          src="https://i.pravatar.cc/40?img=68"
                          alt="Profile"
                          className="w-10 h-10 rounded-full border-2 border-gray-700"
                        />
                        <span className="material-symbols-outlined ml-2 text-gray-400 group-hover:text-white transition-colors">
                          expand_more
                        </span>
                      </summary>
                      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-10">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                        >
                          Your Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                        >
                          Settings
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors"
                        >
                          Logout
                        </a>
                      </div>
                    </details>
                  </div> */}
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

              <CertificateMintingForm/>
              {/* <Component/> */}
              {/* <FeaturedCourses/> */}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
