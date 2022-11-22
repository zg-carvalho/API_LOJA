import multer from "multer";
import multerConfig from "../config/multerConfig";

import Foto from "../models/Foto";

const upload = multer(multerConfig).single("foto")


class FotoController {
  store(req, res) {
    return upload(req, res, async (erro) => {
      if (erro) {
        return res.status(400).json({
          errors: [erro.code],
        })
      }

      const { originalname, filename } = req.file
      const { produto_id } = req.body
      const foto = await Foto.create({ originalname, filename, produto_id })

      return res.json(foto)
    })
  }
}
export default new FotoController()
