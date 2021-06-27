import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { EnsureAdmin } from "./middlewares/EnsureAdmin";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
router.post("/users", createUserController.handle);
router.post("/tags", EnsureAdmin, createTagController.handle);

export { router };