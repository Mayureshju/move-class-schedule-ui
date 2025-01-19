import React, { useState } from 'react';
import { Header } from './components/Header';
import { QuickStats } from './components/QuickStats';
import { QuickLinks } from './components/QuickLinks';
import { Filters } from './components/Filters';
import { ScheduleList } from './components/ScheduleList';

const schedules = {
  'today': [
    {
      id: 1,
      time: '09:00 AM',
      className: 'Morning Yoga Flow',
      instructor: 'Sarah Wilson',
      totalSeats: 12,
      bookedSeats: 8,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=200&h=200',
      location: 'Studio A - Main Floor',
      duration: '60 mins',
      intensity: 'Intermediate',
      category: 'Yoga',
      price: 25
    },
    {
      id: 2,
      time: '11:00 AM',
      className: 'High Intensity Training',
      instructor: 'Mike Johnson',
      totalSeats: 15,
      bookedSeats: 12,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=200&h=200',
      location: 'Training Zone - 2nd Floor',
      duration: '45 mins',
      intensity: 'Advanced',
      category: 'HIIT',
      price: 30
    },
    {
      id: 3,
      time: '02:00 PM',
      className: 'Mindful Meditation',
      instructor: 'Lisa Chen',
      totalSeats: 20,
      bookedSeats: 15,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=200&h=200',
      location: 'Zen Room - 3rd Floor',
      duration: '30 mins',
      intensity: 'Beginner',
      category: 'Meditation',
      price: 20
    }
  ],
  'tomorrow': [
    {
      id: 4,
      time: '10:00 AM',
      className: 'Power Pilates',
      instructor: 'Emma Davis',
      totalSeats: 10,
      bookedSeats: 5,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=200&h=200',
      location: 'Studio B - Main Floor',
      duration: '50 mins',
      intensity: 'Intermediate',
      category: 'Pilates',
      price: 28
    },
    {
      id: 5,
      time: '03:00 PM',
      className: 'Cardio Dance',
      instructor: 'James Rodriguez',
      totalSeats: 25,
      bookedSeats: 18,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1519925610903-381054cc2a1c?auto=format&fit=crop&w=200&h=200',
      location: 'Dance Studio - 1st Floor',
      duration: '55 mins',
      intensity: 'Intermediate',
      category: 'Dance',
      price: 22
    }
  ]
};

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState('All Services');
  const [selectedStaff, setSelectedStaff] = useState('All Staff');
  const [selectedRating, setSelectedRating] = useState('All Ratings');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <QuickStats />
      <QuickLinks />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Filters
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          selectedStaff={selectedStaff}
          setSelectedStaff={setSelectedStaff}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          setSelectedDate={setSelectedDate}
        />
        <ScheduleList schedules={schedules} />
      </div>
    </div>
  );
}

export default App;