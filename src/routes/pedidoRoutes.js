import { Router } from "express";
import pedidoController from "../controllers/PedidoController";

const router = new Router()

router.get("/", pedidoController.index)
router.post("/", pedidoController.store)
router.get("/:id", pedidoController.show)

export default router
