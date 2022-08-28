import { Router } from "express";

import user from "./user";
import room from "./room";
import chat from "./chat";

const router = Router();

router.use("/user", user);
router.use("/chat", chat);
router.use("/room", room);

export default router;
