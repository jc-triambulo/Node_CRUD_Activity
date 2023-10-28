import { Router } from "express";
import {
  handleCreateUser,
  handleDeleteUser,
  handleGetUserById,
  handleGetUserList,
  handleSoftDeleteUser,
  handleUpdateUser,
} from "./service";

const usersRouter = Router();

// Create user
usersRouter.post("/" , handleCreateUser);

// Get list of users
usersRouter.get("/", handleGetUserList);

// Get user by id
usersRouter.get("/:id", handleGetUserById);

// Update user by id
usersRouter.patch("/:id", handleUpdateUser);

// Soft Delete user by id
usersRouter.patch("softdelete/:id", handleSoftDeleteUser);

// Delete user by id
usersRouter.delete("/:id", handleDeleteUser);

export default usersRouter;
