// src/components/FeatureCard.tsx
import React from 'react';
import type { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  color: 'purple' | 'blue';
}

const FeatureCard: React.FC<FeatureCardProps> = ({icon:Icon, title, description, color }) => {
  const colorClasses = {
    purple: 'bg-purple-100 text-purple-600',
    blue: 'bg-blue-100 text-blue-600',  
  };

  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${colorClasses[color]}`}>
        <Icon className={` text-2xl`}/>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;