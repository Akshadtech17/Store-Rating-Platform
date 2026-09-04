export interface Rating {
  id: string;
  rating: number;
  comment?: string;
  userId: string;
  storeId: string;
  user?: {
    id: string;
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateRatingRequest {
  rating: number;
  comment?: string;
}