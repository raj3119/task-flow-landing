import React from 'react';

export function Features() {
  return (
    <section className="py-24 bg-black text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-400">Everything you need to manage your workflow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800">
            <div className="text-4xl mb-4">⚡️</div>
            <h3 className="text-xl font-bold mb-2">Real-time Sync</h3>
            <p className="text-gray-400">Updates instantly across all devices.</p>
          </div>
          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Smart Analytics</h3>
            <p className="text-gray-400">Track progress with automated charts.</p>
          </div>
          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Secure Data</h3>
            <p className="text-gray-400">Bank-grade encryption for your files.</p>
          </div>
        </div>
      </div>
    </section>
  );
}