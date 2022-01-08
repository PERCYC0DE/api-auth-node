import { Router } from "express";
const router = Router();
import * as userController from "../controllers/user.controller";
import { authJWT, verifySignup } from "../middlewares";

router
  .get("/", userController.getUsers)
  .post(
    "/",
    [authJWT.verifyToken, authJWT.isAdmin, verifySignup.checkRolesExisted],
    userController.createUser
  );
export default router;
