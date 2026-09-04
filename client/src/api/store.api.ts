import api from "./axios";
import type { Store } from "../types/store";

export const getStores = async (): Promise<Store[]> => {
  const response = await api.get<Store[]>("/stores");

  return response.data;
};

export const getStoreById = async (id: string): Promise<Store> => {
  const response = await api.get<Store>(`/stores/${id}`);

  return response.data;
};