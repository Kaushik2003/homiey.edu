import React from "react";

const Component = () => {
  return (
    <div id="webcrumbs">
      <div className="w-[1024px] bg-gradient-to-b from-indigo-50 to-blue-50 p-10 rounded-2xl shadow-xl font-sans">
        <div className="flex flex-col space-y-8">
          {/* <div className="text-center mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent mb-3">
              EduChain Certificate Platform
            </h1>
            <p className="text-gray-600 text-lg">
              Mint, verify, and manage educational certificates on the
              blockchain
            </p>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-indigo-100 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <span className="flex justify-center items-center bg-indigo-100 text-indigo-600 p-3 rounded-full w-12 h-12 mr-4">
                  <span className="material-symbols-outlined text-2xl">
                    
                  </span>
                </span>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Mint Your Certificate
                </h2>
              </div>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Wallet Address
                  </label>
                  <input
                    type="text"
                    placeholder="0x..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    OCID (Open Course ID)
                  </label>
                  <input
                    type="text"
                    placeholder="COURSE-2023-001"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Name
                  </label>
                  <input
                    type="text"
                    placeholder="Blockchain Fundamentals"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Certificate URI
                  </label>
                  <input
                    type="text"
                    placeholder="ipfs://..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  <span className="material-symbols-outlined mr-2">
                    add_circle
                  </span>
                  Mint Certificate
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-indigo-100 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <span className="flex justify-center items-center bg-indigo-100 text-indigo-600 p-3 rounded-full w-12 h-12 mr-4">
                  <span className="material-symbols-outlined text-2xl">
                    search
                  </span>
                </span>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Verify Certificate
                </h2>
              </div>

              <details className="mb-6 border rounded-xl group transition-all duration-300 hover:border-indigo-300">
                <summary className="flex items-center justify-between cursor-pointer p-5 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl hover:from-indigo-50 hover:to-blue-50 transition-all duration-300">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-indigo-600 mr-3">
                      verified
                    </span>
                    <span className="font-medium text-gray-800">
                      Certificate Verification
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-indigo-500 group-open:rotate-180 transition-transform duration-300">
                    expand_more
                  </span>
                </summary>
                <div className="p-5 space-y-4 bg-white rounded-b-xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Student Wallet
                    </label>
                    <input
                      type="text"
                      placeholder="0x..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course ID (OCID)
                    </label>
                    <input
                      type="text"
                      placeholder="COURSE-2023-001"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    <span className="material-symbols-outlined mr-2">
                      check_circle
                    </span>
                    Verify Completion
                  </button>
                </div>
              </details>

              <details className="mb-6 border rounded-xl group transition-all duration-300 hover:border-indigo-300">
                <summary className="flex items-center justify-between cursor-pointer p-5 bg-gradient-to-r from-gray-50 to-indigo-50 rounded-xl hover:from-indigo-50 hover:to-blue-50 transition-all duration-300">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-indigo-600 mr-3">
                      receipt_long
                    </span>
                    <span className="font-medium text-gray-800">
                      Get Certificate Details
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-indigo-500 group-open:rotate-180 transition-transform duration-300">
                    expand_more
                  </span>
                </summary>
                <div className="p-5 space-y-4 bg-white rounded-b-xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Token ID
                    </label>
                    <input
                      type="text"
                      placeholder="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition-all"
                    />
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    <span className="material-symbols-outlined mr-2">info</span>
                    Get Certificate Info
                  </button>
                </div>
              </details>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-indigo-100">
            <div className="flex items-center mb-6">
              <span className="flex justify-center items-center bg-indigo-100 text-indigo-600 p-3 rounded-full w-12 h-12 mr-4">
                <span className="material-symbols-outlined text-2xl">
                  history
                </span>
              </span>
              <h2 className="text-2xl font-semibold text-gray-800">
                Certificate History
              </h2>
            </div>

            <div className="overflow-hidden rounded-xl border border-indigo-100">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gradient-to-r from-indigo-50 to-blue-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                        Token ID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                        OCID
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #1
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        COURSE-2023-001
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        0x1a2...3b4c
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Blockchain Fundamentals
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2023-05-15
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 shadow-sm">
                          Verified
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #2
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        COURSE-2023-002
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        0x4d5...6e7f
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Smart Contract Development
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2023-06-22
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 shadow-sm">
                          Verified
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #3
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        COURSE-2023-003
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        0x7g8...9h0i
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        Decentralized Finance
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        2023-07-10
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 shadow-sm">
                          Revoked
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
