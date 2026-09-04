import { Router } from "express";
import {
  registerController,
  loginController,
  meController,
  logoutController,
  changePasswordController,
} from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/me", authenticate, meController);
router.post("/logout", authenticate, logoutController);
router.patch(
  "/password",
  authenticate,
  changePasswordController,
);

export default router;