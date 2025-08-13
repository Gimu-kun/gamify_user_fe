// --- DATA STRUCTURE INTERFACE ---
export interface CardData {
  id: number;
  imageUrl: string;
  title: string;
}

// --- PROPS INTERFACE ---
export interface ImageSwiperProps {
  cards: CardData[];
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}