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
  Child as PrismaChild,
  FamilyMember as PrismaFamilyMember,
  Person as PrismaPerson,
  Spouse as PrismaSpouse,
} from "@prisma/client";

export class ChildServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ChildCountArgs, "select">): Promise<number> {
    return this.prisma.child.count(args);
  }

  async children(args: Prisma.ChildFindManyArgs): Promise<PrismaChild[]> {
    return this.prisma.child.findMany(args);
  }
  async child(args: Prisma.ChildFindUniqueArgs): Promise<PrismaChild | null> {
    return this.prisma.child.findUnique(args);
  }
  async createChild(args: Prisma.ChildCreateArgs): Promise<PrismaChild> {
    return this.prisma.child.create(args);
  }
  async updateChild(args: Prisma.ChildUpdateArgs): Promise<PrismaChild> {
    return this.prisma.child.update(args);
  }
  async deleteChild(args: Prisma.ChildDeleteArgs): Promise<PrismaChild> {
    return this.prisma.child.delete(args);
  }

  async findFamilyMembers(
    parentId: string,
    args: Prisma.FamilyMemberFindManyArgs
  ): Promise<PrismaFamilyMember[]> {
    return this.prisma.child
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .familyMembers(args);
  }

  async getPerson(parentId: string): Promise<PrismaPerson | null> {
    return this.prisma.child
      .findUnique({
        where: { id: parentId },
      })
      .person();
  }

  async getSpouse(parentId: string): Promise<PrismaSpouse | null> {
    return this.prisma.child
      .findUnique({
        where: { id: parentId },
      })
      .spouse();
  }
}
