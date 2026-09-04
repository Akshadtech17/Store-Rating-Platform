import api from "../lib/api";

export const getStores = async () => {
  const response = await api.get("/stores");

  return response.data;
};

export const getStoreById = async (id: string) => {
  const response = await api.get(`/stores/${id}`);

  return response.data;
};