import { ChevronRight } from "lucide-react";
import React from "react";

function Article() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Article 1 */}
        <div className="bg-white overflow-hidden shadow-xl rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:rotate-1">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Cryptocurrency coins"
            />
            <div className="absolute top-0 left-0 m-4 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold rounded-full">
              Eps. 32
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              From Bitcoin to Altcoins: Navigating Crypto Landscape
            </h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800">
                bitcoin
              </span>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800">
                altcoins
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-sm text-gray-500">Hosted by:</span>
                <img
                  className="h-8 w-8 rounded-full ml-2 ring-2 ring-orange-500"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Host"
                />
              </div>
              <a
                href="#"
                className="text-orange-600 hover:text-pink-500 flex items-center transition-colors duration-300"
              >
                Read more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
          Load More Articles
        </button>
      </div>
    </div>
  );
}

export default Article;
