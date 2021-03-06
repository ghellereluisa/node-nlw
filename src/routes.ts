import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { EnsureAdmin } from "./middlewares/EnsureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
router.post("/users", createUserController.handle);
router.post("/tags", EnsureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);

export { router };