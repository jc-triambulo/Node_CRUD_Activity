import { Router } from "express";

import { handleCreateLine, handleDeleteLine, handleGetLineById, handleGetLinesList, handleSoftDeleteLine, handleUpdateLine } from "./service";

const linesRouter = Router();

// Create lines
linesRouter.post("/", handleCreateLine);

// Get list of lines
linesRouter.get("/", handleGetLinesList);

// Get line by id
linesRouter.get("/:id", handleGetLineById);

// Update line by id
linesRouter.patch("/:id", handleUpdateLine);

// Soft Delete line by id
linesRouter.patch("softdelete/:id", handleSoftDeleteLine);

// Delete line by id
linesRouter.delete("/:id", handleDeleteLine);

export default linesRouter;
