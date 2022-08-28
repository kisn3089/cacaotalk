import express, { Application } from "express";
import sequelize from "./sequelize";
import routes from "./routes";
import session from "express-session";
import cors from "cors";
import socket from "./socket";

const FileStore = require("session-file-store")(session);

const app: Application = express();

const sessionMiddleWare = session({
  secret: "cacaotalk", // 쿠키를 임의로 변경하지 못하게 암호화하여 저장
  saveUninitialized: true, // 세션이 저장되기 전에 미리 만들어서 저장하겠다.
  cookie: { secure: false },
  resave: false,
  store: new FileStore(),
});

app.use(sessionMiddleWare);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    // @ts-ignore
    Credential: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });

app.use("/", routes);

const server = app.listen(8000, () => {
  console.log("Hello");
});

socket(server, app, sessionMiddleWare);
