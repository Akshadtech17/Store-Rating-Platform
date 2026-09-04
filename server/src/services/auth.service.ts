import bcrypt from "bcrypt";
import {
  createUser,
  findUserByEmail,
  findUserById,
  updateUserPassword,
} from "../repositories/user.repository.js";
import { generateAccessToken } from "../utils/jwt.js";

const SALT_ROUNDS = 12;

export const register = async (
  name: string,
  email: string,
  password: string,
) => {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("EMAIL_ALREADY_EXISTS");
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await createUser({
    name,
    email,
    passwordHash,
  });

  const token = generateAccessToken(user.id);

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    },
    token,
  };
};

export const login = async (
  email: string,
  password: string,
) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const passwordMatches = await bcrypt.compare(
    password,
    user.passwordHash,
  );

  if (!passwordMatches) {
    throw new Error("INVALID_CREDENTIALS");
  }

  const token = generateAccessToken(user.id);

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    },
    token,
  };
};

export const getCurrentUser = async (userId: string) => {
  const user = await findUserById(userId);

  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

export const changePassword = async (
  userId: string,
  currentPassword: string,
  newPassword: string,
) => {
  const user = await findUserById(userId);

  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }

  const matches = await bcrypt.compare(
    currentPassword,
    user.passwordHash,
  );

  if (!matches) {
    throw new Error("INVALID_CURRENT_PASSWORD");
  }

  const passwordHash = await bcrypt.hash(
    newPassword,
    SALT_ROUNDS,
  );

  await updateUserPassword(userId, passwordHash);
};