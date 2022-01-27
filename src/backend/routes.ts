import { Router } from "express";
import { AddUserToGroupController } from "./Controller/AddUserToGroupController";
import { CreateGroupAndAddUsersController } from "./Controller/CreateGroupAndAddUsers";
import { CreateGroupsController } from "./Controller/CreateGroupsController";
import { CreateUserController } from "./Controller/CreateUserController";
import { ReadGroupsByUserController } from "./Controller/ReadGroupsByUserController";
import { ReadUserController } from "./Controller/ReadUserController";


const router = Router();

const createUser = new CreateUserController();
const createGroups = new CreateGroupsController();
const addUserToGroup = new AddUserToGroupController();
const createGroupAndAddUsers = new CreateGroupAndAddUsersController();
const readGroupsByUser = new ReadGroupsByUserController();
const readUser = new ReadUserController();

router.post("/users", createUser.handle);
router.post("/groups", createGroups.handle);
router.post("/group", addUserToGroup.handle);
router.post("/groups/users", createGroupAndAddUsers.handle);
router.get("/groups/users/:id", readGroupsByUser.handle);
router.get("/users", readUser.handle);

export { router }; 