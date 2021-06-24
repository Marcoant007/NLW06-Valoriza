import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import CreateComplimentController from "./controllers/CreateComplimentController";
import CreateTagController from "./controllers/CreateTagController";
import CreateUserController from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router =  Router();

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController() 
const complimentController = new CreateComplimentController();

router.post("/users", createUserController.create);
router.post("/tags", ensureAdmin, createTagController.create);
router.post("/login", authenticateUserController.create)
router.post("/compliment", complimentController.create)


export default router