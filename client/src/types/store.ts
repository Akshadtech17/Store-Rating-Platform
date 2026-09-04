export interface Store {
  id: string;
  name: string;
  address?: string;
  description?: string;
  category?: string;
  ownerId?: string;
  averageRating?: number;
  totalRatings?: number;
  createdAt?: string;
  updatedAt?: string;
}