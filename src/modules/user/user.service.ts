import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './dto/user';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(data: User) {
    return await this.prisma.user.create({ data });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(query: any) {
    return await this.prisma.user.findUnique({
      where: query,
    });
  }

  async update(query: any, data: User) {
    return await this.prisma.user.update({
      where: query,
      data,
    });
  }

  async delete(query: any) {
    return await this.prisma.user.delete({
      where: query,
    });
  }

  async createUser({ email, ...other }: User) {
    const user = await this.findOne({ email });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    return await this.create({ email, ...other });
  }
}
