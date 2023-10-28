import { Request, Response } from "express";
import { hashString } from "../../utils/hashing";
import { BasicLineUserStationsSelect, createLineUserStationSchema, updateLineUserStationSchema, softDeleteLineUserStationSchema } from "./model";


// Create a LineUserStation
export async function handleCreateLineUserStation(req: Request, res: Response) {
  const payload = createLineUserStationSchema.parse(req.body);

//   payload.password = hashString(payload.password);

  let result = await req.prisma.lineUserStations.create({
    data: payload,
    select: BasicLineUserStationsSelect,
  });

  return res.status(201).json(result);
}

// Get list of LineUserStation
export async function handleGetLineUserStationList(req: Request, res: Response) {
  const prisma = req.prisma;
  const station = await prisma.lineUserStations.findMany({
    select: BasicLineUserStationsSelect,
  });
  return res.status(200).json(station);
}

// Get LineUserStation by id
export async function handleGetLineUserStationById(req: Request, res: Response) {
  const stationId = req.params.id;
  const station = await req.prisma.lineUserStations.findFirstOrThrow({
    where: {
      id: parseInt(stationId),
    },
    select: BasicLineUserStationsSelect,
  });

  return res.status(200).json(station);
}

// Update LineUserStation by id
export async function handleUpdateLineUserStation(req: Request, res: Response) {
  const stationId = req.params.id;
  const payload = updateLineUserStationSchema.parse(req.body);

  const result = await req.prisma.lineUserStations.update({
    data: payload,
    where: {
      id: parseInt(stationId),
    },
    select: BasicLineUserStationsSelect,
  });

  return res.status(200).json(result);
}

// Soft Delete LineUserStation by id
export async function handleSoftDeleteLineUserStation(req: Request, res: Response) {
  const stationId = req.params.id;
  const payload = softDeleteLineUserStationSchema;

  const result = await req.prisma.lineUserStations.delete({
    data: payload,
    where: {
      id: parseInt(stationId),
    },
    select: BasicLineUserStationsSelect,
  });

  return res.status(200).json(result);
}

// Delete LineUserStation by id
export async function handleDeleteLineUserStation(req: Request, res: Response) {
  const stationId = req.params.id;

  const result = await req.prisma.lineUserStations.delete({
    where: {
      id: parseInt(stationId),
    },
    select: BasicLineUserStationsSelect,
  });

  return res.status(200).json(result);
}
