

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.recipe.create({
      data,
    });
  }

  findAll() {
    return this.prisma.recipe.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.recipe.findUnique({
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.recipe.delete({
      where: { id },
    });
  }
}