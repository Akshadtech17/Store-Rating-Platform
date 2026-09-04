import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export interface JwtPayload {
  userId: string;
}

export const generateAccessToken = (userId: string): string => {
  return jwt.sign(
    { userId },
    env.JWT_SECRET,
    {
      expiresIn: env.JWT_EXPIRES_IN,
    } as jwt.SignOptions,
  );
};

export const verifyAccessToken = (token: string): JwtPayload => {
  const decoded = jwt.verify(token, env.JWT_SECRET);

  if (
    typeof decoded !== "object" ||
    decoded === null ||
    typeof decoded.userId !== "string"
  ) {
    throw new Error("Invalid token payload");
  }

  return decoded as JwtPayload;
};