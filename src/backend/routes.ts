import { Router } from "express";
import { AddUserToGroupController } from "./Controller/AddUserToGroupController";
import { CreateGroupAndAddUsersController } from "./Controller/CreateGroupAndAddUsers";
import { CreateGroupsController } from "./Controller/CreateGroupsController";
import { CreateMessagePerGroupController } from "./Controller/CreateMessageController";
import { CreateUserController } from "./Controller/CreateUserController";
import { ReadGroupsController } from "./Controller/ReadGroupController";
import { ReadGroupsByUserController } from "./Controller/ReadGroupsByUserController";
import { ReadUserController } from "./Controller/ReadUserController";


const router = Router();

const createUser                = new CreateUserController();
const createGroups              = new CreateGroupsController();
const addUserToGroup            = new AddUserToGroupController();
const createGroupAndAddUsers    = new CreateGroupAndAddUsersController();
const readGroupsByUser          = new ReadGroupsByUserController();
const readUser                  = new ReadUserController();
const ReadMessagesPerGroup      = new ReadGroupsByUserController();
const CreateMessagePerGroup     = new CreateMessagePerGroupController();
const ReadGroups                = new ReadGroupsController();

router.post("/users", createUser.handle);
router.get("/users", readUser.handle);
router.post("/groups", createGroups.handle);
router.post("/groups/users", createGroupAndAddUsers.handle);
router.get("/groups/users/:id", readGroupsByUser.handle);
router.get("/groups", ReadGroups.handle);
router.post("/group", addUserToGroup.handle);
router.post("/messages", CreateMessagePerGroup.handle);
router.get("/messages/:groupId", ReadMessagesPerGroup.handle);

export { router }; 