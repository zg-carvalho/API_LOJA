import Sequelize, { Model } from "sequelize"
import appConfig from "../config/appConfig";

export default class Foto extends Model{
   static init(sequelize){
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Campo não pode ficar vazio",
          },
        },
      },

      filename: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          notEmpty: {
            msg: "Campo não pode ficar vazio",
          },
        },
      },

      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue("filename")}`
        }
      }

    }, {
      sequelize,
      tableName: "fotos",
    })
    return this;
   }

   static associates(models){
    this.belongsTo(models.Produto, {foreignKey: "produto_id"})
   }
}
