import {
  Controller,
  Post,
  HttpCode,
  Header,
  Get,
  // Redirect,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { CreateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'no-store')
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // findAll(): string {
  //   return 'This action returns all cats';
  // }

  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }

  @Get()
  findAll(@Query('age') age: number, @Query('breed') breed: string): string {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  @Get(':id')
  findOne(@Param('id') id: any): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
