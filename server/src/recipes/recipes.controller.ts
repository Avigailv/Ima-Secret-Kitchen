import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) { }

  @Post()
  create(@Body() body: any) {
    return this.recipesService.create(body);
  }

  @Get()
  findAll() {
    return this.recipesService.findAll();
  }

  // @Get('latest')
  // findLatest() {
  //   return this.recipesService.findLatest();
  // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipesService.remove(Number(id));
  }
}