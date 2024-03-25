import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const url = process.env.DATABASE_URL;
    console.log('Daniel');
    console.log(url);
    super({ datasources: { db: { url: process.env.DATABASE_URL } } });
  }
}
