import {
  Controller,
  Post,
  HttpCode,
  Header,
  Get,
  Redirect,
  Param,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'no-store')
  create() {
    return 'This action adds a new cat';
  }

  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: any): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
