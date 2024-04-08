/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Update as PrismaUpdate,
  Complaint as PrismaComplaint,
  Resident as PrismaResident,
} from "@prisma/client";

export class UpdateServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UpdateCountArgs, "select">): Promise<number> {
    return this.prisma.update.count(args);
  }

  async updates<T extends Prisma.UpdateFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpdateFindManyArgs>
  ): Promise<PrismaUpdate[]> {
    return this.prisma.update.findMany<Prisma.UpdateFindManyArgs>(args);
  }
  async update<T extends Prisma.UpdateFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpdateFindUniqueArgs>
  ): Promise<PrismaUpdate | null> {
    return this.prisma.update.findUnique(args);
  }
  async createUpdate<T extends Prisma.UpdateCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpdateCreateArgs>
  ): Promise<PrismaUpdate> {
    return this.prisma.update.create<T>(args);
  }
  async updateUpdate<T extends Prisma.UpdateUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpdateUpdateArgs>
  ): Promise<PrismaUpdate> {
    return this.prisma.update.update<T>(args);
  }
  async deleteUpdate<T extends Prisma.UpdateDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UpdateDeleteArgs>
  ): Promise<PrismaUpdate> {
    return this.prisma.update.delete(args);
  }

  async findComplaints(
    parentId: number,
    args: Prisma.ComplaintFindManyArgs
  ): Promise<PrismaComplaint[]> {
    return this.prisma.update
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .complaints(args);
  }

  async getResidents(parentId: number): Promise<PrismaResident | null> {
    return this.prisma.update
      .findUnique({
        where: { id: parentId },
      })
      .residents();
  }
}
