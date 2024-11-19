import React from "react";

const Loader = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-50"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="relative flex flex-col items-center space-y-2">
        {/* Chat Bubble Animation */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-bounce shadow-lg">
          <div className="absolute w-12 h-12 bg-white rounded-full opacity-80"></div>
          <div className="absolute w-8 h-8 bg-purple-400 rounded-full animate-ping"></div>
        </div>

        {/* Connecting Dots Animation */}
        <div className="flex space-x-2">
          <span className="w-4 h-4 bg-purple-400 rounded-full animate-bounce"></span>
          <span className="w-4 h-4 bg-indigo-400 rounded-full animate-bounce delay-200"></span>
          <span className="w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-400"></span>
        </div>

        {/* "Thinking..." Text */}
        <p className="text-white text-sm font-semibold tracking-wide mt-4 animate-pulse">
          Thinking...
        </p>
      </div>
    </div>
  );
};

export default Loader;
