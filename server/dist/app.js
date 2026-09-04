import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/auth.routes.js";
const app = express();
/**
 * ============================================================
 * SECURITY MIDDLEWARE
 * ============================================================
 */
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
}));
/**
 * ============================================================
 * BODY PARSING
 * ============================================================
 */
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
/**
 * ============================================================
 * API ROUTES
 * ============================================================
 */
/**
 * Health Check
 */
app.get("/api/v1/health", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "Store Rating Platform API is running",
        timestamp: new Date().toISOString(),
    });
});
/**
 * Authentication
 *
 * POST   /api/v1/auth/register
 * POST   /api/v1/auth/login
 * GET    /api/v1/auth/me
 * POST   /api/v1/auth/logout
 * PATCH  /api/v1/auth/password
 */
app.use("/api/v1/auth", authRoutes);
/**
 * ============================================================
 * 404 HANDLER
 * ============================================================
 */
app.use((_req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
/**
 * ============================================================
 * GLOBAL ERROR HANDLER
 * ============================================================
 */
app.use((error, _req, res, _next) => {
    console.error("Unhandled application error:", error);
    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
});
export default app;
//# sourceMappingURL=app.js.map