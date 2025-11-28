import React from 'react';

export function Testimonials() {
  return (
    <section className="py-24 bg-black text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Loved by Students</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Review 1 */}
          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
            <p className="text-lg text-gray-300 mb-6">"TaskFlow completely changed how I handle my semester projects. I can't imagine college without it now."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500"></div>
              <div>
                <p className="font-bold">Alex Johnson</p>
                <p className="text-sm text-gray-500">Computer Science Student</p>
              </div>
            </div>
          </div>
          {/* Review 2 */}
          <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
            <p className="text-lg text-gray-300 mb-6">"The best part is the real-time collaboration. My group mates and I are finally on the same page."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500"></div>
              <div>
                <p className="font-bold">Sarah Williams</p>
                <p className="text-sm text-gray-500">Design Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}