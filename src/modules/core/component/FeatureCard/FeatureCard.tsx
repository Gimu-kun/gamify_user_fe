// src/components/FeatureCard.tsx
import React from 'react';
import type { IconType } from 'react-icons';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  
}

const FeatureCard: React.FC<FeatureCardProps> = ({icon:Icon, title, description }) => {


  return (
    <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 bg-primary`}>
        <Icon className={` text-2xl`}/>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;