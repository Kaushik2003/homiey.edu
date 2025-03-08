import React from "react";

const CourseCreationCard = () => {
  return (
    <div className="group relative p-6 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/20 overflow-hidden">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-300"></div>
      <span className="material-symbols-outlined text-5xl text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        create
      </span>
      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
        Course Creator
      </h3>
      <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
        Create, manage, and publish your courses with our powerful tools.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-200 group-hover:shadow-lg"
      >
        <span>Go to Creator Portal</span>
        <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">
          
        </span>
      </a>
    </div>
  );
};

export default CourseCreationCard;
