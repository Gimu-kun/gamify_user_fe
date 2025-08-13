import { useEffect } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    const particleCount = 50;
    particlesContainer.innerHTML = ""; // Clear previous particles

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 5 + 1;

      particle.className = "absolute rounded-full bg-purple-300 opacity-30 animate-float";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

      particlesContainer.appendChild(particle);
    }

    // Add keyframes only once
    if (!document.getElementById("float-animation-style")) {
      const style = document.createElement("style");
      style.id = "float-animation-style";
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -20px); }
          50% { transform: translate(20px, 0); }
          75% { transform: translate(10px, 20px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `;
      document.head.appendChild(style);
    }

    const container = document.querySelector<HTMLElement>(".card-container");
    if (!container) return;

    // 3D hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      container.style.transition = "none";
    };

    const handleMouseEnter = () => {
      container.style.transition = "all 0.3s ease";
    };

    const handleMouseLeave = () => {
      container.style.transform = "";
      container.style.transition = "all 0.6s ease";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // ✅ Empty dependency array: chạy 1 lần sau render

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-purple-950 text-white font-sans overflow-hidden">
      {/* Background stars */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('https://placehold.co/1920x1080/2e1a2e?text=.&font=montserrat')",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Particles */}
      <div id="particles" className="absolute inset-0 pointer-events-none" />

      {/* Main content */}
      <div className="card-container relative z-10 p-8 sm:p-10 text-center rounded-3xl bg-pink-800/20 backdrop-blur-lg border border-purple-600/30 shadow-2xl animate-glow max-w-lg w-full mx-4">
        <h1 className="text-8xl sm:text-9xl font-bold text-purple-400 mb-4 relative">
          404
          <span className="absolute -bottom-6 left-0 text-9xl sm:text-10xl text-purple-400/30 blur-lg animate-shadow-wave">
            404
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl mb-4 text-gray-200 animate-fade-in-up">Trang không tồn tại</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8 animate-fade-in-up">
          Xin lỗi, trang bạn đang tìm kiếm không thể tìm thấy. Có thể đã bị xóa hoặc địa chỉ không chính xác.
        </p>
        <Link
          to="/"
          className="relative inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">Quay về trang chủ</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -left-full animate-pulse-sweep" />
        </Link>
      </div>

     

      {/* Global animations (CSS-in-JS) */}
      <style>
        {`
          .animate-glow {
            animation: glow 3s infinite alternate;
          }
          .animate-shadow-wave {
            animation: shadowWave 3s infinite ease-in-out;
          }
          .animate-fade-in-up {
            animation: fadeInUp 1s ease-out forwards;
            opacity: 0;
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out 1.2s forwards;
            opacity: 0;
          }
          .animate-pulse-sweep {
            animation: sweep 1.5s infinite;
          }

          @keyframes glow {
            0% { box-shadow: 0 0 20px rgba(142, 68, 173, 0.4); }
            100% { box-shadow: 0 0 40px rgba(142, 68, 173, 0.7); }
          }
          @keyframes shadowWave {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(10px) scale(1.02); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes sweep {
            from { left: -100%; }
            to { left: 100%; }
          }
        `}
      </style>
    </div>
  );
};

export default PageNotFound;