import React from 'react';
import { Dumbbell } from 'lucide-react';

export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <Dumbbell className="w-12 h-12 text-[#DC3545] animate-bounce" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#DC3545] to-[#ff4d5d] rounded-full animate-ping opacity-20"></div>
      </div>
      <p className="mt-4 text-gray-600 font-medium animate-pulse">Loading schedules...</p>
    </div>
  );
}
