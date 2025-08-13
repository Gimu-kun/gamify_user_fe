import { ImageSwiper } from '../../../../component/ImageSwiper/ImageSwiper';
import type { CardData } from '../../../../Types/CardImgData/CardImgData';

function ImageSwiperPage() {
  // Data for the cards, including image URLs and titles
  const cardData: CardData[] = [
    { id: 1, imageUrl: 'https://i.pinimg.com/736x/d6/8a/12/d68a121e960094f99ad8acd37505fb7d.jpg', title: 'Crimson Forest' },
    { id: 2, imageUrl: 'https://i.pinimg.com/736x/21/16/f7/2116f71f9d51d875e44d809f074ff079.jpg', title: 'Misty Mountains' },
    { id: 3, imageUrl: 'https://i.pinimg.com/1200x/fe/c2/0d/fec20d2958059b8463bffb138d4eaac6.jpg', title: 'Floating Islands' },
    { id: 4, imageUrl: 'https://i.pinimg.com/736x/84/dc/62/84dc62de850a34a9d420c97f3a2d58f4.jpg', title: 'Crystal Cave' },
    { id: 5, imageUrl: 'https://i.pinimg.com/1200x/be/c3/7e/bec37e2c43e703f922f887db2578ce2e.jpg', title: 'Sunset Peaks' },
    { id: 6, imageUrl: 'https://i.pinimg.com/736x/47/dd/47/47dd47b0d66c2fa641e03e370bcb5433.jpg', title: 'Night Sky' },
    { id: 7, imageUrl: 'https://i.pinimg.com/736x/05/01/bc/0501bcd327d9df915e83154bbf9456e3.jpg', title: 'Ancient Ruins' },
    { id: 8, imageUrl: 'https://i.pinimg.com/736x/c1/46/be/c146bebffca026d2c4fa76cc85aac917.jpg', title: 'Magical Tree' },
    { id: 9, imageUrl: 'https://i.pinimg.com/736x/91/7a/51/917a51df0d444def3cade8d626305a67.jpg', title: 'Celestial Waters' },
  ];

  return (
    <div className="text-white w-full flex flex-col items-center justify-center p-4 font-sans overflow-hidden">
        <ImageSwiper cards={cardData} />
    </div>
  );
}

export default ImageSwiperPage;