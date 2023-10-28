import { z } from "zod";
import { Prisma } from "@prisma/client";

export type User = {
  id: number;
  employeeName: string;
  employeeId: number;
  status: number;
};

export const createUserSchema = z.object({
  status: z.number({ required_error: "Status is required. "}),
  employeeName: z.string({ required_error: "Employee name is required." }),
  employeeId: z.number({ required_error: "Employee Id is required." }),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;

export const updateUserSchema = z.object({
  employeeName: z.string().optional(),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;

export const softDeleteUserSchema = ({
  status: 0,
});

export type softDeleteUserSchema = typeof softDeleteUserSchema;


export const BasicUserSelect: Prisma.UsersSelect = {
  id: true,
  employeeName: true,
  employeeId: true,
  status: true,
  dateCreated: true,
  dateModified: true,
};
