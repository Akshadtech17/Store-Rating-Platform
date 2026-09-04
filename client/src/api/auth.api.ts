import api from "./axios";
import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
} from "../types/auth";

export const loginUser = async (
  data: LoginRequest
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/login", data);

  return response.data;
};

export const registerUser = async (
  data: RegisterRequest
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/register", data);

  return response.data;
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await api.get<User>("/auth/me");

  return response.data;
};