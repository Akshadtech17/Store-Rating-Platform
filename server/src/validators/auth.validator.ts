import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),

  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must not exceed 255 characters")
    .transform((email) => email.toLowerCase()),

  password: z
    .string()
    .min(8, "Password must contain at least 8 characters")
    .max(128, "Password must not exceed 128 characters"),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .transform((email) => email.toLowerCase()),

  password: z
    .string()
    .min(1, "Password is required"),
});

export const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(1, "Current password is required"),

  newPassword: z
    .string()
    .min(8, "New password must contain at least 8 characters")
    .max(128, "New password must not exceed 128 characters"),
});