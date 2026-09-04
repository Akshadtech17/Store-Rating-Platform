import type { Request, Response } from "express";
import {
  register,
  login,
  getCurrentUser,
  changePassword,
} from "../services/auth.service.js";
import {
  registerSchema,
  loginSchema,
  changePasswordSchema,
} from "../validators/auth.validator.js";
import type { AuthenticatedRequest } from "../middlewares/auth.middleware.js";

export const registerController = async (
  req: Request,
  res: Response,
) => {
  try {
    const data = registerSchema.parse(req.body);

    const result = await register(
      data.name,
      data.email,
      data.password,
    );

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "EMAIL_ALREADY_EXISTS"
    ) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid registration data",
    });
  }
};

export const loginController = async (
  req: Request,
  res: Response,
) => {
  try {
    const data = loginSchema.parse(req.body);

    const result = await login(
      data.email,
      data.password,
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "INVALID_CREDENTIALS"
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid login data",
    });
  }
};

export const meController = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    if (!req.userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const user = await getCurrentUser(req.userId);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
};

export const logoutController = async (
  _req: AuthenticatedRequest,
  res: Response,
) => {
  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
};

export const changePasswordController = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    if (!req.userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const data = changePasswordSchema.parse(req.body);

    await changePassword(
      req.userId,
      data.currentPassword,
      data.newPassword,
    );

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "INVALID_CURRENT_PASSWORD"
    ) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Unable to change password",
    });
  }
};