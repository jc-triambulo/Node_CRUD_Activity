import { z } from "zod";
import { Prisma } from "@prisma/client";

export type Stations = {
  id: number;
  stationName: string;
  stationAlias: string;
  isLastStation: number;
  status: number;
  lineId: number;
};

export const createStationsSchema = z.object({
  stationName: z.string({ required_error: "Station name is required." }),
  stationAlias: z.string({ required_error: "Status alias is required." }),
  isLastStation: z.number({ required_error: "Is Last Station is required. "}),
  status: z.number({ required_error: "Status is required. "}),
  lineId: z.number({ required_error: "Line Id is required" }),
});

export type createStationsSchema = z.infer<typeof createStationsSchema>;

export const updateStationsSchema = z.object({
  stationName: z.string().optional(),
  stationAlias: z.string().optional(),
  isLastStation: z.number().optional(),
  status: z.number().optional(),
});

export const softDeleteStationSchema = ({
  status: 0,
});

export type softDeleteStationSchema = typeof softDeleteStationSchema;

export type updateStationsSchema = z.infer<typeof updateStationsSchema>;

export const BasicStationsSelect: Prisma.StationsSelect = {
    id: true,
    stationName: true,
    stationAlias: true,
    isLastStation: true,
    status: true,
    lineId: true,
  };
