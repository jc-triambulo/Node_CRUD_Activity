import { Request, Response } from "express";
import { hashString } from "../../utils/hashing";
import { BasicStationsSelect, createStationsSchema, updateStationsSchema, softDeleteStationSchema } from "./model";


// Create a Station
export async function handleCreateStations(req: Request, res: Response) {
  const payload = createStationsSchema.parse(req.body);

//   payload.password = hashString(payload.password);

  let result = await req.prisma.stations.create({
    data: payload,
    select: BasicStationsSelect,
  });

  return res.status(201).json(result);
}

// Get list of stations
export async function handleGetStationList(req: Request, res: Response) {
  const prisma = req.prisma;
  const station = await prisma.stations.findMany({
    select: BasicStationsSelect,
  });
  return res.status(200).json(station);
}

// Get station by id
export async function handleGetStationById(req: Request, res: Response) {
  const stationId = req.params.id;
  const station = await req.prisma.stations.findFirstOrThrow({
    where: {
      id: parseInt(stationId),
    },
    select: BasicStationsSelect,
  });

  return res.status(200).json(station);
}

// Update station by id
export async function handleUpdateStation(req: Request, res: Response) {
  const stationId = req.params.id;
  const payload = updateStationsSchema.parse(req.body);

  const result = await req.prisma.stations.update({
    data: payload,
    where: {
      id: parseInt(stationId),
    },
    select: BasicStationsSelect,
  });

  return res.status(200).json(result);
}

// Soft Delete station by id
export async function handleSoftDeleteStation(req: Request, res: Response) {
  const stationId = req.params.id;
  const payload = softDeleteStationSchema;

  const result = await req.prisma.stations.update({
    data:payload,
    where: {
      id: parseInt(stationId),
    },
    select: BasicStationsSelect,
  });

  return res.status(200).json(result);
}

// Delete station by id
export async function handleDeleteStation(req: Request, res: Response) {
  const stationId = req.params.id;

  const result = await req.prisma.stations.delete({
    where: {
      id: parseInt(stationId),
    },
    select: BasicStationsSelect,
  });

  return res.status(200).json(result);
}
