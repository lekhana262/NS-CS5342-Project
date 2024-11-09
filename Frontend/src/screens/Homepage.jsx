import React from "react";
import NetworkSecurityInfo from "./NetworkSecurityInfo";
import { FaShieldAlt, FaLock, FaFireAlt, FaNetworkWired } from "react-icons/fa";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-8 md:px-16 lg:px-24 text-center bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 shadow-lg rounded-b-2xl">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight tracking-wide">
            Your Network. Secured.
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 font-light mb-8 max-w-2xl mx-auto">
            Discover cutting-edge strategies and tools to fortify your digital environment against evolving threats.
          </p>
          <a
            href="#network-security"
            className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-200 transform hover:scale-105"
          >
            Learn More
          </a>
        </div>

        {/* Background Accents */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-700 opacity-30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-700 opacity-40 rounded-full blur-2xl"></div>
      </section>

      {/* Security Icons */}
      

      {/* Main Content */}
      <NetworkSecurityInfo />

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-black py-16 px-6 text-center text-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-4">
            The Importance of Network Security
          </h2>
          <p className="text-lg font-light mb-6">
            With cyber threats becoming more advanced, protecting your network is essential. Explore best practices for securing sensitive data, mitigating risks, and maintaining system integrity.
          </p>
          <a
            href="#network-security"
            className="inline-block bg-yellow-500 text-gray-900 font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}

export default HomePage;
