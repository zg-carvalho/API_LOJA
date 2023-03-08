import Sequelize, { Model } from "sequelize"

export default class Pedido extends Model {
  static init(sequelize) {
    super.init({
      itens: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [1, 2550000000000],
            msg: "Nome precisa ter entre 3 e 255 caracteres",
          },
        },
      },

    },
      {
        sequelize,
      })
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "pedido_id"})
  }
}
