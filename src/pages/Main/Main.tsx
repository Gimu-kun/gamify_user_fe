import ImageSwiperPage from "../../modules/core/design-system/notical/error_notice/ImageSwiperPage/ImageSwiperPage";
// src/components/Home.tsx
import { CiBookmark } from "react-icons/ci";

import { FaBook } from "react-icons/fa6";
import { TbBooks } from "react-icons/tb";
import React from 'react';
import { useScrollAnimation } from '../../modules/core/Hook/useScrollAnimation/useScrollAnimation';
import FeatureCard from '../../modules/core/component/FeatureCard/FeatureCard';
import TestimonialCard from '../../modules/core/component/TestimonialCard/TestimonialCard';
import Button from '../../modules/core/component/Button/Button';
import { useNavigate } from "react-router-dom";


const Main: React.FC = () => {
  const navigate = useNavigate();
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-r from-purple-500 to-purple-700 text-white opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className=" mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Học Cấu trúc dữ liệu và Giải thuật khó ?</h1>
            <p className="text-xl mb-8 text-center">
             Việc khó cứ để chúng tôi lo, nơi cung cấp các bài tập dưới dạng trò chơi mà không chán 
            </p>
            <div className="flex flex-col justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button onClick={() => navigate("/exam")} variant="primary">Tham gia vượt ải </Button>
              <Button variant="secondary">Tham gia xếp hạng 2 người</Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <ImageSwiperPage />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-20 bg-white opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className=" mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">thông điệp và lộ trình của chúng tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vừa Học Vừa Chơi không mất đánh mất tương lai chỉ khi bạn làm chủ nó
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard
              icon={CiBookmark}
              title=" Độ khó từ cơ bản đến nâng cao"
              description="Giúp người học tiếp cận các kiến thức CTDL & GT từ Beginner đến Warrior."
              color="purple"
            />
            <FeatureCard
              icon={FaBook}
              title="Ứng Dụng Di Động"
              description="Phát triển ứng dụng di động tối ưu cho mọi nền tảng với giao diện thân thiện."
              color="purple"
            />
            <FeatureCard
              icon={TbBooks}
              title="Điện Toán Đám Mây"
              description="Giải pháp lưu trữ và xử lý đám mây an toàn, tiết kiệm chi phí cho doanh nghiệp."
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={testimonialsRef}
        className="py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className=" mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             cung cấp các dịch vụ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Nguyễn Văn A"
              role="Giám đốc Công ty X"
              avatar="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/554d7146-5590-409e-8560-a8d84b5524ef.png"
              rating={5}
              text="Dịch vụ rất chuyên nghiệp, nhân viên tận tâm. Giải pháp công nghệ giúp chúng tôi tiết kiệm 30% chi phí vận hành."
            />
            <TestimonialCard
              name="Trần Thị B"
              role="CEO Công ty Y"
              avatar="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9305b0d-c194-476c-9871-37b0915d7f2e.png"
              rating={4.5}
              text="Ứng dụng di động được phát triển rất tốt, giao diện thân thiện. Khách hàng của chúng tôi phản hồi rất tích cực."
            />
            <TestimonialCard
              name="Lê Văn C"
              role="Trưởng phòng IT"
              avatar="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f2d2ea1-a2b3-4198-b35a-0b87a7bba214.png"
              rating={5}
              text="Hệ thống cloud của họ giúp chúng tôi quản lý dữ liệu hiệu quả hơn. Hỗ trợ kỹ thuật 24/7 rất chu đáo."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-16 bg-purple-600 text-white opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className=" mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Sẵn Sàng Bắt Đầu Hành Trình Của Bạn?</h2>
            <p className="text-xl mb-8">
              Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí và báo giá chi tiết.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;