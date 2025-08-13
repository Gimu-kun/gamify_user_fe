import { useState, type JSX } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Import các icon từ React Icons
import { FaHome, FaChartLine, FaEnvelope, FaCalendar, FaUsers, FaCog } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { CiLogout } from 'react-icons/ci';

interface MenuItem {
  icon: string;
  label: string;
  path: string;
}

const SideHeader = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const showAddButton = true;
  const location = useLocation();

  // Ánh xạ từ tên font-awesome sang React Icon component
  const iconMap: Record<string, JSX.Element> = {
    'fa-home': <FaHome className="w-7 h-7" />,
    'fa-chart-line': <FaChartLine className="w-7 h-7" />,
    'fa-envelope': <FaEnvelope className="w-7 h-7" />,
    'fa-calendar': <FaCalendar className="w-7 h-7" />,
    'fa-users': <FaUsers className="w-7 h-7" />,
    'fa-cog': <FaCog className="w-7 h-7" />
  };

  const menuItems: MenuItem[] = [
    { icon: 'fa-home', label: 'User', path: '/user' },
    { icon: 'fa-chart-line', label: 'Settings', path: '/user/settings' },
    { icon: 'fa-envelope', label: 'Messages', path: '/messages' },
    { icon: 'fa-calendar', label: 'Calendar', path: '/calendar' },
    { icon: 'fa-users', label: 'Team', path: '/team' },
    { icon: 'fa-cog', label: 'Settings', path: '/settings' }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleAddClick = () => {
    alert('chuyen trag va tai lai');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${isCollapsed ? 'w-20' : 'w-72'
          } bg-gradient-to-br from-purple-800 to-purple-600 text-white transition-all duration-300 sticky top-0 h-screen overflow-y-auto shadow-lg`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32f524f4-547b-44c8-afa1-3f9b1c424aef.png"
                  alt="Purple gradient circle logo with white letter P"
                  className="w-6 h-6 object-cover"
                />
              </div>
              {!isCollapsed && (
                <h2 className="text-xl font-bold">Logo</h2>
              )}
            </div>
            {
              isCollapsed == false &&
                <button
                  onClick={toggleSidebar}
                  className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
                >
                  {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
                </button>
            }
          </div>
        </div>

        {/* Menu */}
        <nav className="py-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${location.pathname === item.path
                  ? 'bg-white/20 border-l-4 border-white'
                  : 'hover:bg-white/10'
                } flex items-center px-6 py-3 cursor-pointer transition-all duration-200 border-l-4 border-transparent`}
            >
              <div className="w-6 text-center">
                {iconMap[item.icon]}
              </div>

              {!isCollapsed && (
                <span className="ml-3 text-lg">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Add Button */}
        {showAddButton && !isCollapsed && (
          <div className="px-6 mt-4">
            <button
              onClick={handleAddClick}
              className="w-full bg-white/20 hover:bg-white/30 rounded-lg py-2 px-4 flex items-center justify-center transition-colors duration-200"
            >
              <CiLogout strokeWidth={2} className='mr-2'/>
              <span>Đăng xuất</span>
            </button>
          </div>
        )}
      </aside>

      {/* Collapsed Sidebar Toggle Button */}
      {isCollapsed && (
        <button
          onClick={toggleSidebar}
          className="fixed left-20 top-1/6 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white w-4 h-8 rounded-r-md flex items-center justify-center shadow-lg z-50 transition-all duration-300 hover:w-5"
        >
          <FiChevronRight />
        </button>
      )}
    </div>
  );
};

export default SideHeader;