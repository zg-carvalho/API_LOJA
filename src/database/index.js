import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Produto from "../models/Produto";
import Foto from "../models/Foto";

const models = [Produto, Foto];

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))

