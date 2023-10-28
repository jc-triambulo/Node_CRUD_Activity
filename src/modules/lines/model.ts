import { z } from "zod";
import { Prisma } from "@prisma/client";

export type Lines = {
  id: number;
  lineName: string;
  status: number;
};

export const createLineSchema = z.object({
  lineName: z.string({ required_error: "Line name is required." }),
  status: z.number({ required_error: "Status is required." }),
});

export type createLineSchema = z.infer<typeof createLineSchema>;

export const updateLineSchema = z.object({
  lineName: z.string().optional(),
  // status: z.number().optional(),
});

export type updateLineSchema = z.infer<typeof updateLineSchema>;

export const softDeleteLineSchema = ({
  status: 0,
});

export type softDeleteLineSchema = typeof softDeleteLineSchema;

export const BasicLinesSelect: Prisma.LinesSelect = {
    id: true,
    lineName: true,
    status: true,
    dateCreated: true,
    dateModified: true,
  };
