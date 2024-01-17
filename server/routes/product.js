import { Router } from "express";

import verifyToken from "../middleware/verifyToken.js";
import productControllers from "../controllers/product.js";

const productRouter = Router();

productRouter.get("/", productControllers.getProducts);
productRouter.post("/add", verifyToken, productControllers.addProduct);
productRouter.put("/update/:id", verifyToken, productControllers.updateProduct);
productRouter.delete("/delete/:id", verifyToken, productControllers.deleteProduct);

export default productRouter;
