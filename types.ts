
export interface Product {
  id: string;
  name: string;
  category: 'Consumer' | 'Professional' | 'Enterprise' | 'Agriculture' | 'Component';
  year: string;
  description: string;
  imageUrl: string;
}

export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
}

export interface MarketData {
  name: string;
  value: number;
}
