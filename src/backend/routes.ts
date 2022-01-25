import { Router } from "express";
import { AddUserToGroupController } from "./Controller/AddUserToGroupController";
import { CreateGroupAndAddUsersController } from "./Controller/CreateGroupAndAddUsers";
import { CreateGroupsController } from "./Controller/CreateGroupsController";
import { CreateUserController } from "./Controller/CreateUserController";
import { ReadGroupsByUserController } from "./Controller/ReadGroupsByUserController";


const router = Router();

const createUser = new CreateUserController();
const createGroups = new CreateGroupsController();
const AddUserToGroup = new AddUserToGroupController();
const CreateGroupAndAddUsers = new CreateGroupAndAddUsersController();
const ReadGroupsByUser = new ReadGroupsByUserController();

router.post("/user", createUser.handle);
router.post("/groups", createGroups.handle);
router.post("/group", AddUserToGroup.handle);
router.post("/groups/users", CreateGroupAndAddUsers.handle);
router.get("/groups/users/:id", ReadGroupsByUser.handle);

export { router }; 