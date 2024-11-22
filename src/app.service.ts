import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the World of the Nestjs with prisma ORM configuration!';
  }
}
