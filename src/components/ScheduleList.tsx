import React from 'react';
import { Calendar } from 'lucide-react';
import { ScheduleCard } from './ScheduleCard';

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

interface ScheduleListProps {
  schedules: Record<string, Schedule[]>;
}

export function ScheduleList({ schedules }: ScheduleListProps) {
  return (
    <>
      {Object.entries(schedules).map(([day, daySchedules]) => (
        <div key={day} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 capitalize flex items-center">
            <Calendar className="w-6 h-6 mr-2 text-[#DC3545]" />
            {day}
          </h2>
          <div className="space-y-4">
            {daySchedules.map((schedule) => (
              <ScheduleCard key={schedule.id} schedule={schedule} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}