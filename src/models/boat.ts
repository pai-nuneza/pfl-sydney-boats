export interface Boat {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  maxGuests: number;
  boatType: string;
  features: string[];
  catering: string[];
  events: string[];
  recommended: boolean;
}
