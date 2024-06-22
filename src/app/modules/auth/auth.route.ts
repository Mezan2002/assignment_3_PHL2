import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { createUserValidationSchema } from "../user/user.validation";
import { AuthControllers } from "./auth.controller";

const router = express.Router();

router.post(
  "/signup",
  validateRequest(createUserValidationSchema),
  AuthControllers.registerUser
);

export const AuthRoutes = router;
