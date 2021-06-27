import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import CreateComplimentController from "./controllers/CreateComplimentController";
import CreateTagController from "./controllers/CreateTagController";
import CreateUserController from "./controllers/CreateUserController";
import ListTagsController from "./controllers/ListTagsController";
import ListUserReceivedComplimentsController from "./controllers/ListUserReceiveComplimentsController";
import ListUserController from "./controllers/ListUsersController";
import ListUserSendComplimentsController from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";


const router =  Router();

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController() 
const complimentController = new CreateComplimentController();
const listSendCompliments = new ListUserSendComplimentsController();
const listReceiveCompliments = new ListUserReceivedComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

router.post("/users", createUserController.create);
router.get("/users", ensureAuthenticated, listUsersController.list);
router.post("/tags", ensureAuthenticated ,ensureAdmin, createTagController.create);
router.get("/tags", ensureAuthenticated,listTagsController.list);
router.post("/login", authenticateUserController.create);
router.post("/compliment", ensureAuthenticated ,complimentController.create);
router.get("/users/compliments/send",ensureAuthenticated, listSendCompliments.list);
router.get("/users/compliments/receive",ensureAuthenticated, listReceiveCompliments.list);

export default router