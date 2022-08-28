import { DataTypes } from "sequelize/types";
import sequelize from "../sequelize";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  username: DataTypes.STRING,
  thumbnailImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
