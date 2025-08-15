// components/TimelineAbout.tsx
import  { useState } from 'react';
import { RiEyeFill, RiUser3Fill } from 'react-icons/ri';

const TimelineAbout = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'about'>('about'); // Mặc định mở "About"

  return (
    <section className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-lg rounded-lg p-10 shadow">
      {/* Tabs */}
      <div className="tabs mb-10">
        <ul className="flex relative pb-2">
          <li
            className="flex items-center mr-10 cursor-pointer"
            onClick={() => setActiveTab('timeline')}
          >
            <RiEyeFill className="text-lg mr-2 text-[#333333]" />
            <span className="text-lg font-medium text-[#333333]">Timeline</span>
                {activeTab === 'timeline' && (
              <span
                className="absolute bottom-0 left-0 w-30 h-0.5"
                style={{ backgroundColor: '#ffbc40' }}
              ></span>
            )} 
          </li>
          <li
            className="flex items-center mr-10 relative cursor-pointer"
            onClick={() => setActiveTab('about')}
          >
            <RiUser3Fill className="text-lg mr-2 text-[#333333]" />
            <span className="text-lg font-medium text-[#333333]">About</span>
            {activeTab === 'about' && (
              <span
                className="absolute bottom-0 left-0 w-full h-0.5"
                style={{ backgroundColor: '#ffbc40' }}
              ></span>
            )}
          </li>
        </ul>
      </div>

      {/* Nội dung theo tab */}
      {activeTab === 'about' ? (
        <>
          {/* Contact Information */}
          <div className="contact_Info mb-6">
            <h1 className="text-xs uppercase text-[#333333]/60 mb-6">Contact Information</h1>
            <ul>
              {[
                { label: 'Phone:', info: '+11 234 567 890' },
                {
                  label: 'Address:',
                  info: 'S34 E 65th Street <br/> New York, NY 10651-78 156-187-60',
                },
                { label: 'E-mail:', info: 'hello@rsmarquetech.com' },
                { label: 'Site:', info: 'www.rsmarquetech.com' },
              ].map((item, i) => (
                <li key={i} className="flex mb-2" style={{ margin: '0.5rem 0' }}>
                  <h1
                    className="font-medium text-sm min-w-[12rem]"
                    style={{ color: '#333333' }}
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: ['Phone:', 'E-mail:', 'Site:'].includes(item.label) ? '#ffbc40' : '#333333',
                    }}
                    dangerouslySetInnerHTML={{ __html: item.info }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Basic Information */}
          <div className="basic_info">
            <h1 className="text-xs uppercase text-[#333333]/60 mb-6">Basic Information</h1>
            <ul>
              {[
                { label: 'Birthday:', info: 'Dec 25, 2000' },
                { label: 'Gender:', info: 'Male' },
              ].map((item, i) => (
                <li key={i} className="flex mb-2" style={{ margin: '0.5rem 0' }}>
                  <h1 className="font-medium text-sm min-w-[12rem]" style={{ color: '#333333' }}>{item.label}</h1>
                  <span className="text-sm" style={{ color: '#333333' }}>{item.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        // Giả lập nội dung Timeline (bạn có thể thêm thật sau)
        <div className="timeline">
          <h1 className="text-lg font-semibold text-[#333333] mb-4">User Activity Timeline</h1>
          <ul className="space-y-4 text-sm text-[#333333]">
            <li><strong>Jan 2024:</strong> Joined MarqueTech as Senior Designer</li>
            <li><strong>Mar 2024:</strong> Launched new product dashboard</li>
            <li><strong>May 2024:</strong> Presented at Design Conf NYC</li>
            <li><strong>Today:</strong> Updated profile information</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default TimelineAbout;