import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured");
}

const adapter = new PrismaBetterSqlite3({
  url: databaseUrl,
});

const prisma = new PrismaClient({
  adapter,
});

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const findUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const createUser = async (data: {
  name: string;
  email: string;
  passwordHash: string;
}) => {
  return prisma.user.create({
    data,
  });
};

export const updateUserPassword = async (
  id: string,
  passwordHash: string,
) => {
  return prisma.user.update({
    where: { id },
    data: {
      passwordHash,
    },
  });
};