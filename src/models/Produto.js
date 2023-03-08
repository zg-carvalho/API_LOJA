import Sequelize, { Model } from "sequelize"

export default class Produto extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [2, 255],
            msg: "Nome precisa ter entre 3 e 255 caracteres",
          },
        },
      },
      marca: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [2, 255],
            msg: "Marca precisa ter entre 3 e 255 caracteres",
          },
        },
      },

      descricao: {
        type: Sequelize.STRING,
        defaultValue: "",
        validate: {
          len: {
            args: [2, 255],
            msg: "Marca precisa ter entre 3 e 255 caracteres",
          },
        },
      },

      quantidade: {
        type: Sequelize.INTEGER,
        defaultValue: "",
        validate: {
          isInt: {
            args: [2, 255],
            msg: "Idade precisa ser um número inteiro",
          },
        },
      },

      custo: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Peso precisa ser um número inteiro ou de ponto flutuante",
          },
        },
      },

      preco: {
        type: Sequelize.FLOAT,
        defaultValue: "",
        validate: {
          isFloat: {
            msg: "Peso precisa ser um número inteiro ou de ponto flutuante",
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
    this.hasMany(models.Foto, { foreignKey: "produto_id"})
  }
}
