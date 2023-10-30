import { z } from "zod";
import { Prisma } from "@prisma/client";

export type LineUserStations = {
  id: number;
  userId: number,
  stationId: number,
  status: number,
};

export const createLineUserStationSchema = z.object({
    userId: z.number({ required_error: "User Id is required" }),
    stationId: z.number({ required_error: "Station Id is required" }),
    status: z.number({ required_error: "Status is required." }),
});

export type createLineUserStationSchema = z.infer<typeof createLineUserStationSchema>;

export const updateLineUserStationSchema = z.object({
    userId: z.number().optional(),
    stationId: z.number().optional(),
});

export type updateLineUserStationSchema = z.infer<typeof updateLineUserStationSchema>;

export const softDeleteLineUserStationSchema = ({
  status: 0,
});

export type softDeleteLineUserStationSchema = typeof softDeleteLineUserStationSchema;

export const BasicLineUserStationsSelect: Prisma.LineUserStationsSelect = {
    id: true,
    userId: true,
    stationId: true,
    status: true,
  };
