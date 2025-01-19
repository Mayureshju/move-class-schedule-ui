import React from 'react';
import { Dumbbell, Users, GraduationCap } from 'lucide-react';

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

function QuickLink({ icon, title, description, onClick }: QuickLinkProps) {
  return (
    <button 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full"
    >
      <div className="bg-red-50 p-4 rounded-xl">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </button>
  );
}

export function QuickLinks() {
  return (
    <div className="max-w-7xl mx-auto px-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <QuickLink
          icon={<Dumbbell className="w-6 h-6 text-[#DC3545]" />}
          title="Class Management"
          description="Schedule and manage your fitness classes"
          onClick={() => console.log('Navigate to Class Management')}
        />
        <QuickLink
          icon={<Users className="w-6 h-6 text-[#DC3545]" />}
          title="Members"
          description="View and manage gym memberships"
          onClick={() => console.log('Navigate to Members')}
        />
        <QuickLink
          icon={<GraduationCap className="w-6 h-6 text-[#DC3545]" />}
          title="Instructors"
          description="Manage your fitness instructors"
          onClick={() => console.log('Navigate to Instructors')}
        />
      </div>
    </div>
  );
}