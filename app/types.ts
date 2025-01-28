export interface Car {
  _id: string;
  name: string;
  slug: string;
  brand: string;
  type: string;
  fuelCapacity: number;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
}
