import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    this.$connect()
      .then(() => {
        console.log('Connected to Database!');
      })
      .catch((err) => {
        console.error('Failed to connect to Database', err);
      });
  }
}
