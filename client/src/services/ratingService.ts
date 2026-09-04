import api from "../lib/api";

export const submitRating = async (
  storeId: string,
  rating: number
) => {
  const response = await api.post("/ratings", {
    storeId,
    rating,
  });

  return response.data;
};

export const updateRating = async (
  ratingId: string,
  rating: number
) => {
  const response = await api.put(`/ratings/${ratingId}`, {
    rating,
  });

  return response.data;
};