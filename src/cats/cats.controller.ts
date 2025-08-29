import {
  Controller,
  Post,
  // HttpCode,
  // Header,
  Get,
  // Redirect,
  // Param,
  Body,
  // Query,
  // Res,
  // HttpStatus,
} from '@nestjs/common';
import { CreateCatDto } from './cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';
import type { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // findAll(): string {
  //   return 'This action returns all cats';
  // }
  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }
  // @Get()
  // findAll(@Query() query: any): string {
  //   console.log(query);
  //   return `This action returns all cats filtered by name: ${query.filter.where.name} and breed: ${query.filter.where.age}`;
  // }
  // @Get(':id')
  // findOne(@Param('id') id: any): string {
  //   console.log(id);
  //   return `This action returns a #${id} cat`;
  // }
  // @Get()
  // findAll(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.OK).json([]);
  //   return [];
  // }
  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }
  // @Post()
  // @HttpCode(204)
  // @Header('Cache-Control', 'no-store')
  // create(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }
  // @Post()
  // create(@Res() res: Response) {
  //   res.status(HttpStatus.CREATED).send();
  // }
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
