import { Sequelize } from "sequelize/types";

const sequelize = new Sequelize("sqlite::memory:");

export default sequelize;
