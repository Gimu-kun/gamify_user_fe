// components/Header.tsx


const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center">
        <figure>
          <img src="web_logo.jpg" alt="logo" className="w-14 h-14" />
        </figure>
        <span className="text-lg font-bold ml-2 text-[#333333]">
          <svg height="30" width="200" xmlns="http://www.w3.org/2000/svg">
          <text x="5" y="15" fill="black">Gamify</text>
        </svg>
        </span>
      </div>
      <div className="flex space-x-4">
        <h2 className="text-[#333333]">tùy chỉnh</h2>
        <h2 className="text-[#333333]">Lấy iD</h2>
        <h2 className="text-[#333333]">Đăng xuất</h2>
      </div>
    </header>
  );
};

export default Header;