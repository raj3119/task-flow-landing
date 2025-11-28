import React from 'react';

export function Pricing() {
  return (
    <section className="py-24 bg-black text-white border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">Simple Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800">
            <h3 className="text-xl font-bold text-gray-400 mb-2">Free</h3>
            <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-500">/mo</span></div>
            <button className="w-full py-3 rounded-lg border border-gray-700 font-semibold mb-6">Get Started</button>
            <ul className="text-left space-y-3 text-gray-400">
              <li>✓ Unlimited Tasks</li>
              <li>✓ 2 Collaborators</li>
              <li>✓ Basic Support</li>
            </ul>
          </div>
          {/* Pro Plan */}
          <div className="p-8 rounded-2xl bg-gray-900 border border-blue-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl-lg">POPULAR</div>
            <h3 className="text-xl font-bold text-blue-400 mb-2">Pro</h3>
            <div className="text-4xl font-bold mb-6">$12<span className="text-lg text-gray-500">/mo</span></div>
            <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold mb-6">Upgrade Now</button>
            <ul className="text-left space-y-3 text-gray-300">
              <li>✓ Unlimited Everything</li>
              <li>✓ Advanced Analytics</li>
              <li>✓ Priority Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}