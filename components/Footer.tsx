import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 bg-black text-white text-center">
      <p className="text-2xl font-bold mb-4">TaskFlow</p>
      <div className="flex justify-center gap-6 text-gray-400 mb-8">
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">GitHub</a>
        <a href="#" className="hover:text-white">LinkedIn</a>
      </div>
      <p className="text-gray-600 text-sm">© 2025 TaskFlow Inc. All rights reserved.</p>
    </footer>
  );
}