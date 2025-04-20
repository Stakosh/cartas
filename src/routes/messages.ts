import { Router } from "../../deps.ts";
import { postMessage } from "../controllers/messageController.ts";

const router = new Router();
router.post("/api/messages", postMessage);

export default router;
