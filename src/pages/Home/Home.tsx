import './Home.css'
// src/components/Home.tsx

import Game from "../../assets/images/banner/Game.svg";
import Winner from "../../assets/images/banner/winner.svg";

import React from 'react';
import { useScrollAnimation } from '../../modules/core/Hook/useScrollAnimation/useScrollAnimation';

import Button from '../../modules/core/component/Button/Button';
import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  

  return (
    <div className="font-sans text-gray-800 ">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative "
      >
        <div className=" mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-5xl font-bold mb-4 text-center">Học Thuật toán để làm gì? </h1>
            <p className="text-2xl mb-8 text-center">
            chúng tôi là gamify nơi vừa chơi vừa học ngâng cao tư duy thuật toán.
            </p>
            <div className="flex flex-col justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button onClick={() => navigate("/login")} variant="primary">Tham gia ngay </Button>
              
            </div>
          </div>
          <div className="md:w-1/2 ">
            <div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--color-primary)"  transform="translate(100 100)" >
            <animate attributeName='d' dur='20000ms' repeatCount='indefinite' values='
            M49.3,-64.3C64.1,-57,76.5,-43,79.9,-27.2C83.3,-11.5,77.6,6,68.2,18.2C58.7,30.3,45.4,37.3,33.4,42.7C21.4,48.1,10.7,51.9,-3,56C-16.7,60.1,-33.3,64.4,-44.6,58.8C-55.8,53.2,-61.6,37.5,-60.2,23.8C-58.7,10.1,-50,-1.6,-44.8,-13.6C-39.5,-25.5,-37.9,-37.7,-31,-47.5C-24.1,-57.3,-12.1,-64.9,2.6,-68.4C17.2,-72,34.4,-71.5,49.3,-64.3Z;

            M26.3,-42.8C34.4,-30.4,41.4,-23.1,45,-14.1C48.6,-5.2,48.7,5.3,50,20.8C51.2,36.2,53.6,56.6,45.4,66.2C37.3,75.9,18.6,74.9,0.6,74.1C-17.3,73.2,-34.7,72.4,-46.9,64C-59.2,55.7,-66.3,39.8,-70.3,23.8C-74.2,7.7,-74.9,-8.4,-68.2,-20C-61.4,-31.6,-47.4,-38.7,-34.8,-49.7C-22.2,-60.7,-11.1,-75.6,-1,-74.2C9.1,-72.9,18.3,-55.3,26.3,-42.8Z;

            M26,-31.9C36.8,-28,50.7,-24.5,62.5,-14.2C74.2,-3.9,83.8,13.2,77.3,22.6C70.8,32,48.2,33.6,32.7,38.5C17.1,43.5,8.5,51.6,-2.1,54.5C-12.7,57.4,-25.5,55,-32.5,47.3C-39.6,39.6,-41,26.7,-48.3,13.5C-55.6,0.3,-68.9,-13.2,-66.4,-21.8C-63.9,-30.4,-45.7,-34.1,-32,-37C-18.3,-39.9,-9.1,-42.1,-0.8,-41.1C7.6,-40.1,15.2,-35.8,26,-31.9Z;

            M46.1,-68.1C57.4,-55.3,62.4,-38.6,66.7,-22.4C70.9,-6.2,74.3,9.5,69.6,22.1C64.8,34.7,51.9,44.1,38.9,49.5C25.9,54.9,13,56.3,-0.9,57.5C-14.7,58.7,-29.4,59.7,-43,54.5C-56.7,49.3,-69.2,38,-70.4,25.1C-71.5,12.2,-61.3,-2.2,-57.1,-19.7C-53,-37.2,-55.1,-57.9,-46.6,-71.6C-38.1,-85.4,-19,-92.1,-0.8,-91C17.4,-89.9,34.9,-81,46.1,-68.1Z;

            M49.3,-64.3C64.1,-57,76.5,-43,79.9,-27.2C83.3,-11.5,77.6,6,68.2,18.2C58.7,30.3,45.4,37.3,33.4,42.7C21.4,48.1,10.7,51.9,-3,56C-16.7,60.1,-33.3,64.4,-44.6,58.8C-55.8,53.2,-61.6,37.5,-60.2,23.8C-58.7,10.1,-50,-1.6,-44.8,-13.6C-39.5,-25.5,-37.9,-37.7,-31,-47.5C-24.1,-57.3,-12.1,-64.9,2.6,-68.4C17.2,-72,34.4,-71.5,49.3,-64.3Z;
            '  calcMode="linear">  
            </animate>
           </path >      
           <image 
    href={Game}
    x="100" y="100" 
    width="100" height="100" 
    transform="translate(-60 -50)" 
    className="z-1" 
    preserveAspectRatio="xMidYMid slice" 
  />
         <image 
          href={Winner}
          x="100" y="100" 
          width="100" height="100" 
          transform="translate(-20 -80)" 
          className="z-1" 
          preserveAspectRatio="xMidYMid slice" />
 
            </svg>
          
            </div>
        
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-20  opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className=" mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">thông điệp và lộ trình của chúng tôi</h2>
            <p className="text-xl text-text max-w-2xl mx-auto">
                Vừa Học Vừa Chơi không mất đánh mất tương lai chỉ khi bạn làm chủ nó
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default Home;