import React from 'react';
import { Calendar, Users, Star, Dumbbell } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

function StatCard({ title, value, icon, bgColor, iconColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 transform hover:scale-105 transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className={`${bgColor} p-3 rounded-full`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export function QuickStats() {
  return (
    <div className="max-w-7xl mx-auto px-4 -mt-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Today's Classes"
          value={8}
          icon={<Calendar className="w-6 h-6 text-[#DC3545]" />}
          bgColor="bg-red-100"
          iconColor="text-[#DC3545]"
        />
        <StatCard
          title="Available Spots"
          value={45}
          icon={<Users className="w-6 h-6 text-[#DC3545]" />}
          bgColor="bg-red-100"
          iconColor="text-[#DC3545]"
        />
        <StatCard
          title="Active Trainers"
          value={12}
          icon={<Dumbbell className="w-6 h-6 text-[#DC3545]" />}
          bgColor="bg-red-100"
          iconColor="text-[#DC3545]"
        />
        <StatCard
          title="Avg Rating"
          value={4.8}
          icon={<Star className="w-6 h-6 text-[#DC3545]" />}
          bgColor="bg-red-100"
          iconColor="text-[#DC3545]"
        />
      </div>
    </div>
  );
}