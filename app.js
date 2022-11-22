import dotenv from "dotenv"
dotenv.config()
import './src/database'
import express from "express"

import homeRoutes from "./src/routes/homeRoutes"
import produtoRoutes from "./src/routes/produtoRoutes"
import fotoRoutes from "./src/routes/fotoRoutes"

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended:true }))
    this.app.use(express.json())
  }

  routes() {
     this.app.use("/", homeRoutes)
     this.app.use("/produtos/", produtoRoutes)
     this.app.use("/fotos/", fotoRoutes)
  }
}
export default new App().app
