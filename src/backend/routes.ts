import { Router } from "express";
import { AddUserToGroupController } from "./Controllers/AddUserToGroupController";
import { CreateGroupAndAddUsersController } from "./Controllers/CreateGroupAndAddUsers";
import { CreateGroupsController } from "./Controllers/CreateGroupsController";
import { CreateMessagePerGroupController } from "./Controllers/CreateMessageController";
import { CreateUserController } from "./Controllers/CreateUserController";
import { ReadGroupsController } from "./Controllers/ReadGroupController";
import { ReadGroupsByUserController } from "./Controllers/ReadGroupsByUserController";
import { ReadMessagesPerGroupController } from "./Controllers/ReadMessagesPerGroup";
import { ReadUserController } from "./Controllers/ReadUserController";


const router = Router();

const createUser                = new CreateUserController();
const createGroups              = new CreateGroupsController();
const addUserToGroup            = new AddUserToGroupController();
const createGroupAndAddUsers    = new CreateGroupAndAddUsersController();
const readGroupsByUser          = new ReadGroupsByUserController();
const readUser                  = new ReadUserController();
const ReadMessagesPerGroup      = new ReadMessagesPerGroupController();
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