import { Router } from "express";
import produtoController from "../controllers/ProdutoController";

const router = new Router()

router.get("/", produtoController.index)
router.post("/", produtoController.store)
router.put("/:id", produtoController.update)
router.get("/:id", produtoController.show)
router.delete("/:id", produtoController.delete)

export default router
