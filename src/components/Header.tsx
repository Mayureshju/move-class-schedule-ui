import React from 'react';
import { Calendar } from 'lucide-react';

export function Header() {
  return (
    <div className="bg-gradient-to-r from-[#DC3545] to-[#ff4d5d] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 animate-fade-in">
          Great to see you, Mayuresh! 👋
        </h1>
        <div className="flex items-center space-x-2 text-white/90">
          <Calendar className="w-5 h-5" />
          <span className="text-lg">Your Fitness Calendar</span>
        </div>
      </div>
    </div>
  );
}