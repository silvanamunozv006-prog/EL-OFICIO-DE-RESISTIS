export interface RecyclerProfile {
  id: string;
  name: string;
  age?: number;
  role: string;
  image: string;
  quote: string;
  bio: string;
  status: 'Asociado' | 'Independiente';
  audioUrl?: string;
  audioDuration?: string;
}

export interface MapPoint {
  id: string;
  title: string;
  category: 'historico' | 'social' | 'ambiental';
  subtitle: string;
  description: string;
  image: string;
  details: string;
  x: number; // Percent width on our customized map
  y: number; // Percent height on our customized map
  quote?: string;
  quoteAuthor?: string;
}

export interface MaterialCost {
  id: string;
  name: string;
  unit: string;
  paidToRecycler: number; // COP
  paidToIndustry: number; // COP
  description: string;
  iconName: string;
}

export interface PickupRequest {
  id: string;
  name: string;
  address: string;
  materialType: string;
  date: string;
  status: 'pending' | 'scheduled' | 'completed';
}
