import { DataTypes } from "sequelize/types";
import sequelize from "../sequelize";
import User from "./user";
import Room from "./room";

const Chat = sequelize.define("chat", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  content: DataTypes.STRING,
  senderId: {
    type: DataTypes.UUID,
    references: {
      model: User,
    },
  },
  roomId: {
    type: DataTypes.INTEGER,
    references: {
      model: Room,
    },
  },
});

export default Chat;
