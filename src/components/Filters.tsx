import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  selectedService: string;
  setSelectedService: (value: string) => void;
  selectedStaff: string;
  setSelectedStaff: (value: string) => void;
  selectedRating: string;
  setSelectedRating: (value: string) => void;
  setSelectedDate: (date: Date) => void;
}

export function Filters({
  selectedService,
  setSelectedService,
  selectedStaff,
  setSelectedStaff,
  selectedRating,
  setSelectedRating,
  setSelectedDate,
}: FiltersProps) {
  const selectClasses = "px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DC3545] transition-all";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <Filter className="w-5 h-5 mr-2" />
        Filter Classes
      </h2>
      <div className="flex flex-wrap gap-4">
        <select 
          className={selectClasses}
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option>All Services</option>
          <option>Yoga</option>
          <option>HIIT</option>
          <option>Pilates</option>
          <option>Meditation</option>
          <option>Dance</option>
        </select>

        <select 
          className={selectClasses}
          value={selectedStaff}
          onChange={(e) => setSelectedStaff(e.target.value)}
        >
          <option>All Staff</option>
          <option>Sarah Wilson</option>
          <option>Mike Johnson</option>
          <option>Emma Davis</option>
          <option>Lisa Chen</option>
          <option>James Rodriguez</option>
        </select>

        <select 
          className={selectClasses}
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
        >
          <option>All Ratings</option>
          <option>4.5+</option>
          <option>4.0+</option>
          <option>3.5+</option>
        </select>

        <input 
          type="date" 
          className={selectClasses}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </div>
    </div>
  );
}