import { PrismaClient } from "@prisma/client";

export class UserRepository {
  private db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async create(body: any) {
    return await this.db.user.create({
      data: body,
      select: {
        id: true,
        username: true,
      },
    });
  }

  async g() {
    return await this.db.user.findFirst({
      where: {
        id: 1,
      },
    });
  }
}
