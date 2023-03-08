import dotenv from "dotenv"
dotenv.config()
import './src/database'
import express from "express"
import cors from "cors"
import homeRoutes from "./src/routes/homeRoutes"
import produtoRoutes from "./src/routes/produtoRoutes"
import pedidoRoutes from "./src/routes/pedidoRoutes"
import fotoRoutes from "./src/routes/fotoRoutes"
import {resolve} from "path"

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(express.static(resolve(__dirname,"uploads")))
  }

  routes() {
    const lista_rotas = [
      'http://localhost:3000',
      'http://localhost:3001',
    ]
    const corsOptions = {
      origin(origin, callback) {
        if (lista_rotas.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
        }
        else {
          callback(new Error("Bloqueado pelo Cors"))
        }
      }
    }
    this.app.use(cors(corsOptions))
    this.app.use("/", homeRoutes)
    this.app.use("/produtos/", produtoRoutes)
    this.app.use("/pedido/", pedidoRoutes)
    this.app.use("/fotos/", fotoRoutes)

  }
}
export default new App().app
