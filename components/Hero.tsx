import React from 'react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden border-b border-gray-800">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-3 py-1 border border-gray-700 rounded-full bg-gray-900/50 text-sm text-gray-300">
          ✨ TaskFlow v2.0 is live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Manage Projects <br /> Like a Pro.
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          The all-in-one workspace for students and teams. Track tasks, collaborate in real-time, and hit your deadlines.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition">
            Get Started
          </button>
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg font-semibold transition">
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}