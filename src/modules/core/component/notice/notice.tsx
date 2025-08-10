import { IoClose } from "react-icons/io5";


interface NoticeProps {
  icon: React.ComponentType<{ className?: string }>; // Icon từ react-icons
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
 
}

const Notice: React.FC<NoticeProps> = ({ 
  icon: Icon, 
  title, 
  message, 
  type, 
  
}) => {

  // Định nghĩa màu sắc theo loại thông báo
  const colorClasses = {
    success: {
      bg: 'bg-green-50',         // nền xanh nhạt
      border: 'border-purple-300', // viền xanh
      text: 'text-green-800',     // chữ tối
      icon: 'text-green-600',     // icon xanh đậm
      shadow: 'shadow-purple-200', // bóng đổ xanh nhạt
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-purple-300',
      text: 'text-red-800',
      icon: 'text-red-600',
      shadow: 'shadow-purple-200',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-purple-300',
      text: 'text-blue-800',
      icon: 'text-blue-600',
      shadow: 'shadow-purple-200',
    },
  };

  // Lấy class tương ứng theo type
  const { bg, border, text, icon: iconColor, shadow } = colorClasses[type];

  return (
    <div
      className={`${bg} ${border} ${text} ${shadow} rounded-lg border overflow-hidden shadow-md max-w-lg`}
    >
      <div className="flex p-4">
        {/* Hiển thị icon */}
        <div className="shrink-0">
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>

        {/* Nội dung thông báo */}
        <div className="ml-3 space-y-1 flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{message}</p>
        </div>

        
          <div className={`flex items-center ${border} pl-4`}>
            <button

              className={`${text} text-gray-500 hover:text-purple-700 focus:outline-none`}
            >
              <IoClose className="h-8 w-8" />
            </button>
          </div>
        
      </div>
    </div>
  );
};

export default Notice;