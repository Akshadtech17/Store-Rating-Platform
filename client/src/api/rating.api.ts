import api from "./axios";
import type {
  Rating,
  CreateRatingRequest,
} from "../types/rating";

export const getStoreRatings = async (
  storeId: string
): Promise<Rating[]> => {
  const response = await api.get<Rating[]>(
    `/stores/${storeId}/ratings`
  );

  return response.data;
};

export const createRating = async (
  storeId: string,
  data: CreateRatingRequest
): Promise<Rating> => {
  const response = await api.post<Rating>(
    `/stores/${storeId}/ratings`,
    data
  );

  return response.data;
};