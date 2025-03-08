import React from 'react';
import CourseList from "./CourseList";

const FeaturedCourses = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="col-span-2 p-6 rounded-xl bg-gray-800 shadow-lg">
                      <div className="flex flex-col gap-4">
                        
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-xl font-bold">Featured Courses</h2>
                          <a
                            href="#"
                            className="text-blue-400 hover:text-blue-300 flex items-center transition-colors"
                          >
                            <span>View All</span>
                            <span className="material-symbols-outlined ml-1">
                              
                            </span>
                          </a>
                        </div>
                      </div>
    
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="group p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 border border-gray-600 hover:border-gray-500">
                          <div className="relative mb-3">
                            <img
                              src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                              alt="Blockchain Basics"
                              className="w-full h-40 object-cover rounded-lg"
                            />
                            <div className="absolute top-2 right-2 bg-blue-500 text-xs font-bold px-2 py-1 rounded">
                              NFT
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-1 group-hover:text-blue-300 transition-colors">
                            Blockchain Fundamentals
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">
                            Learn the core concepts of blockchain technology
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">$79.99</span>
                            <div className="flex items-center text-yellow-400 text-sm">
                              <span className="material-symbols-outlined text-sm mr-1">
                                star
                              </span>
                              <span>4.8</span>
                            </div>
                          </div>
                        </div>
    
                        <div className="group p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 border border-gray-600 hover:border-gray-500">
                          <div className="relative mb-3">
                          <img
                          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                          alt="Smart Contracts"
                          className="w-full h-40 object-cover rounded-lg"
                        />
                            <div className="absolute top-2 right-2 bg-blue-500 text-xs font-bold px-2 py-1 rounded">
                              NFT
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-1 group-hover:text-blue-300 transition-colors">
                            Smart Contract Development
                          </h3>
                          <p className="text-gray-400 text-sm mb-3">
                            Master the art of writing secure smart contracts
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300">$99.99</span>
                            <div className="flex items-center text-yellow-400 text-sm">
                              <span className="material-symbols-outlined text-sm mr-1">
                                star
                              </span>
                              <span>4.9</span>
                            </div>
                          </div>
                        </div>
    
                        <CourseList />
                      </div>
                    </div>
    
                    {/* <div className="p-6 rounded-xl bg-gray-800 shadow-lg">
                      <h2 className="text-xl font-bold mb-6">Your Stats</h2>
    
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-gray-700">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">Courses Created</h3>
                            <span className="text-lg font-bold">7</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-purple-500 h-2 rounded-full"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
    
                        <div className="p-4 rounded-lg bg-gray-700">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">NFTs Owned</h3>
                            <span className="text-lg font-bold">12</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
    
                        <div className="p-4 rounded-lg bg-gray-700">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-medium">Revenue (ETH)</h3>
                            <span className="text-lg font-bold">3.45</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: "35%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
  )
}

export default FeaturedCourses;
