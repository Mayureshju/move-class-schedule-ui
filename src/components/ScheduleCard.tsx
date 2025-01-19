import React from 'react';
import { Users, Clock, MapPin, Star, Heart, Share2 } from 'lucide-react';

interface Schedule {
  id: number;
  time: string;
  className: string;
  instructor: string;
  totalSeats: number;
  bookedSeats: number;
  rating: number;
  imageUrl: string;
  location: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  price: number;
}

interface ScheduleCardProps {
  schedule: Schedule;
}

export function ScheduleCard({ schedule }: ScheduleCardProps) {
  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src={schedule.imageUrl} 
              alt={schedule.className}
              className="w-20 h-20 rounded-xl object-cover shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 bg-[#DC3545] rounded-full w-4 h-4 border-2 border-white"></div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-xl text-gray-900">{schedule.className}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getIntensityColor(schedule.intensity)}`}>
                {schedule.intensity}
              </span>
            </div>
            <p className="text-gray-600 flex items-center mt-1">
              <Users className="w-4 h-4 mr-1" />
              {schedule.instructor}
            </p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {schedule.duration}
              </span>
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {schedule.location}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-2xl font-bold text-[#DC3545]">{schedule.time}</p>
          <p className="text-lg font-semibold text-gray-700">${schedule.price}</p>
          <div className="flex items-center space-x-2 mt-2">
            <div className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 font-medium">{schedule.rating}</span>
            </div>
            <span className="text-sm text-gray-600">
              ({schedule.bookedSeats}/{schedule.totalSeats} booked)
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full bg-gray-100 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-[#DC3545] to-[#ff4d5d] rounded-full h-2.5 transition-all duration-500"
            style={{ width: `${(schedule.bookedSeats / schedule.totalSeats) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Heart className="w-5 h-5 text-gray-500" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Share2 className="w-5 h-5 text-gray-500" />
        </button>
        <button className="px-4 py-2 bg-[#DC3545] text-white rounded-lg hover:bg-[#bb2d3b] transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
}