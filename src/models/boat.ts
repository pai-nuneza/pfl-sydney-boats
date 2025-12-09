export interface Boat {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  maxGuests: number;
  boatType: string;
  features: string[];
  catering: string[];
  shortDescription: string;
  longDescription: string;
  events: string[];
  recommended: boolean;
}
