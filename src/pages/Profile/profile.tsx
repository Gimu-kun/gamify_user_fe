// components/Profile.tsx
import React from 'react';
// Import các component con từ các đường dẫn tương ứng trong dự án
import Header from '../../modules/User/components/Profile/HeaderProfile/HeaderProfile';
import UserProfile from '../../modules/User/components/Profile/UserProfile/UserProfile';
import UserDetails from '../../modules/User/components/Profile/UserDetail/UserDetail';
import WorkSkills from '../../modules/User/components/Profile/WorkSkillProfile/WorkSkillProfile';
import TimelineAbout from '../../modules/User/components/Profile/TimeLineAbout/TimeLineAbout';

//khai báo thư viện css 

import './profile.css'

// Component chính Profile - dùng để hiển thị trang hồ sơ người dùng
const Profile: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className='mx-auto p-4 w-full max-w-6xl shadow-lg'>
        <Header />
      </div>

      {/* Main container */}
      <div className="flex justify-center items-start min-h-screen font-poppins relative pt-6 pb-6"
           style={{ fontFamily: 'Poppins, sans-serif' }}>

        {/* Background blur */}
        <div
          className="absolute inset-0 z-[-1] bg-no-repeat bg-left"
          style={{
            backgroundImage: "url('bg.png')",
            backgroundSize: 'cover',
            filter: 'blur(8px)',
            opacity: 0.6,
          }}
        ></div>

        {/* Profile card */}
        <div className="relative w-full max-w-6xl h-auto min-h-[80vh] rounded-lg shadow-lg p-4 sm:p-6"
             style={{
               background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.3))',
               backdropFilter: 'blur(1rem)',
               boxShadow: '0 0 5px rgba(255, 255, 255, 0.5), 0 0 25px rgba(0, 0, 0, 0.08)',
             }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 h-full">
            <UserProfile />
            <TimelineAbout />
            <WorkSkills />
            <UserDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;