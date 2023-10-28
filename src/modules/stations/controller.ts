import { Router } from "express";
import { handleCreateStations, handleDeleteStation, handleGetStationById, handleGetStationList, handleSoftDeleteStation, handleUpdateStation } from "./service";


const stationsRouter = Router();

//Create Station
stationsRouter.post("/", handleCreateStations);

//Get list of stations
stationsRouter.get("/", handleGetStationList);

//Get station by id
stationsRouter.get("/:id", handleGetStationById);

//Update station by id
stationsRouter.patch("/id", handleUpdateStation);

// Soft Delete user by id
stationsRouter.patch("softdelete/:id", handleSoftDeleteStation);

//Delete station by id 
stationsRouter.delete("/", handleDeleteStation);

export default stationsRouter;