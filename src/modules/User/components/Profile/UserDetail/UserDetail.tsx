// components/UserDetails.tsx

import { RiChat4Fill, RiCheckFill } from 'react-icons/ri';

const UserDetails = () => {
  return (
    <section className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-lg rounded-lg p-6 shadow">
      <div className="userName mb-6">
        <h1 className="text-2xl font-bold text-[#333333]">Jeremy Rose</h1>
        <div className="map absolute top-10 left-72 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-sm mr-1 text-[#333333]" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="text-sm font-bold text-[#333333]/80">New York, NY</span>
        </div>
        <p className="text-sm font-bold text-[#ffbc40] mt-2">Product Designer</p>
      </div>

      <div className="rank mb-6 relative">
        <h1 className="text-xs uppercase text-[#333333]/60 mb-2">Rankings</h1>
        <span className="text-xl font-bold" style={{ color: '#fa6639' }}>8,6</span>
        <div className="rating absolute top-[4.3rem] left-14 flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="text-lg"
              viewBox="0 0 24 24"
              fill={i < 4 ? '#ffbc40' : '#f2eee960'}
              width="20"
              height="20"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ))}
        </div>
      </div>

      <div className="btns">
        <ul className="flex">
          <li className="flex items-center mr-10">
            <RiChat4Fill className="text-lg mr-2 text-[#333333]" />
            <a href="#" className="text-lg font-medium text-[#333333]">
              Send Message
            </a>
          </li>
          <li className="flex items-center mr-10 bg-[#f2eee9] px-4 py-2 rounded-lg">
            <RiCheckFill className="text-lg mr-2" style={{ color: '#ffbc40' }} />
            <a href="#" className="text-lg font-medium" style={{ color: '#ffbc40' }}>
              Contacts
            </a>
          </li>
          <li className="flex items-center">
            <a href="#" className="text-lg font-medium text-[#333333]">
              Report User
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserDetails;