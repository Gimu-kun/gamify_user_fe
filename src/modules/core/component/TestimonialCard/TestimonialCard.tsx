// src/components/TestimonialCard.tsx
import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, avatar, rating, text }) => {
  const renderStars = () => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < full) {
        stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
      } else if (i === full && hasHalf) {
        stars.push(<i key={i} className="fas fa-star-half-alt text-yellow-400"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-400"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">"{text}"</p>
      <div className="flex mt-4">{renderStars()}</div>
    </div>
  );
};

export default TestimonialCard;