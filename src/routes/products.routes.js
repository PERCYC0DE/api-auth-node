import { Router } from "express";
const router = Router();
import * as productsController from "../controllers/products.controller";
import { authJWT } from "../middlewares";

router
  .get("/", productsController.getProducts)
  .get("/:productId", productsController.getProductById)
  .post(
    "/",
    [authJWT.verifyToken, authJWT.isModerator],
    productsController.createProduct
  )
  .put(
    "/:productId",
    [authJWT.verifyToken, authJWT.isAdmin],
    productsController.updateProductById
  )
  .delete(
    "/:productId",
    [authJWT.verifyToken, authJWT.isAdmin],
    productsController.deleteProductById
  );
export default router;
