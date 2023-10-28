import { Router } from "express";
import { handleCreateLineUserStation, handleDeleteLineUserStation, handleGetLineUserStationById, handleGetLineUserStationList, handleSoftDeleteLineUserStation, handleUpdateLineUserStation } from "./service";

const lineUserStationsRouter = Router();

// Create lineUserStations
lineUserStationsRouter.post("/", handleCreateLineUserStation);

// Get list of lineUserStations
lineUserStationsRouter.get("/", handleGetLineUserStationList);

// Get lineUserStations by id
lineUserStationsRouter.get("/:id", handleGetLineUserStationById);

// Update lineUserStations by id
lineUserStationsRouter.patch("/:id", handleUpdateLineUserStation);

// Soft Delete user by id
lineUserStationsRouter.patch("softdelete/:id", handleSoftDeleteLineUserStation);

// Delete lineUserStations by id 
lineUserStationsRouter.delete("/:id", handleDeleteLineUserStation);

export default lineUserStationsRouter;