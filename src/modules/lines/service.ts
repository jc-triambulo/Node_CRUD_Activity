import { Request, Response } from "express";
import { hashString } from "../../utils/hashing";
import { BasicLinesSelect, createLineSchema, softDeleteLineSchema, updateLineSchema,  } from "./model";

// Create a Line
export async function handleCreateLine(req: Request, res: Response) {
  const payload = createLineSchema.parse(req.body);

  // payload.password = hashString(payload.password);

  let result = await req.prisma.lines.create({
    data: payload,
    select: BasicLinesSelect,
  });

  return res.status(201).json(result);
}

// Get list of Lines
export async function handleGetLinesList(req: Request, res: Response) {
  const prisma = req.prisma;
  const line = await prisma.lines.findMany({
    select: BasicLinesSelect,
  });
  return res.status(200).json(line);
}

// Get line by id
export async function handleGetLineById(req: Request, res: Response) {
  const lineId = req.params.id;
  const line = await req.prisma.lines.findFirstOrThrow({
    where: {
      id: parseInt(lineId),
    },
    select: BasicLinesSelect,
  });

  return res.status(200).json(line);
}

// Update line by id
export async function handleUpdateLine(req: Request, res: Response) {
  const lineId = req.params.id;
  const payload = updateLineSchema.parse(req.body);

  const result = await req.prisma.lines.update({
    data: payload,
    where: {
      id: parseInt(lineId),
    },
    select: BasicLinesSelect,
  });

  return res.status(200).json(result);
}

// Soft Delete line by id
export async function handleSoftDeleteLine(req: Request, res: Response) {
  const lineId = req.params.id;
  const payload = softDeleteLineSchema;

  const result = await req.prisma.lines.delete({
    data: payload,
    where: {
      id: parseInt(lineId),
    },
    select: BasicLinesSelect,
  });

  return res.status(200).json(result);
}

// Delete line by id
export async function handleDeleteLine(req: Request, res: Response) {
  const lineId = req.params.id;

  const result = await req.prisma.lines.delete({
    where: {
      id: parseInt(lineId),
    },
    select: BasicLinesSelect,
  });

  return res.status(200).json(result);
}
