/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Post,
  HttpCode,
  Header,
  Get,
  Redirect,
  Param,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
  Query,
  Res,
  UsePipes,
  DefaultValuePipe,
  ParseBoolPipe,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
  Inject,
  SetMetadata,
} from '@nestjs/common';
import type { CreateCatDto } from './cats.dto';
// import { createCatSchema } from './cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';
import type { Response } from 'express';
import { HttpExceptionFilter } from '../filter/http-exception.filter';
// import { ValidationPipe } from '../pipe/validation.pipe';
import { ZodValidationPipe } from '../pipe/zod-validation.pipe';
// import { ParseIntPipe } from '../pipe/parse-int.pipe';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { User } from 'src/decorator/user.decorator';

@Controller('cats')
// @UseFilters(new HttpExceptionFilter()) // 控制器范围
// @UseInterceptors(LoggingInterceptor) // 控制器范围 @UseInterceptors(new LoggingInterceptor())
export class CatsController {
  constructor(
    private catsService: CatsService,
    @Inject('CONNECTION') private readonly connection: string,
  ) {}
  @UseGuards(RolesGuard) // @UseGuards(new RolesGuard())

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

  // @Get()
  // findAll(): Cat[] {
  //   return this.catsService.findAll();
  // }

  // @Get()
  // findAll() {
  //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  // }

  // @Get()
  // findAll(): Cat[] {
  //   try {
  //     return this.catsService.findAll();
  //   } catch (error) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.FORBIDDEN,
  //         error: 'This is a custom message',
  //       },
  //       HttpStatus.FORBIDDEN,
  //       {
  //         cause: error,
  //       },
  //     );
  //   }
  // }

  /**
   * Get a cat by ID
   * @param id The ID of the cat to retrieve
   * @returns The cat ID (placeholder - would normally return cat data)
   */
  // @Get(':id')
  // findOne(
  //   @Param(
  //     'id',
  //     new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
  //   )
  //   id: number,
  // ) {
  //   return id;
  // }

  // @Get(':id')
  // findOne(@Param('id', ParseIntPipe) id: number) {
  //   return id;
  // }

  // @Get()
  // // @Roles(['admin'])
  // findAll(
  //   @Query('activeOnly', new DefaultValuePipe(false), ParseBoolPipe)
  //   activeOnly: boolean,
  //   @Query('page', new DefaultValuePipe(0), ParseIntPipe) page: number,
  // ) {
  //   return `activeOnly: ${activeOnly}, page: ${page}`;
  // }

  // @Get()
  // findOne(@User('firstName') firstName: string) {
  //   console.log(firstName);
  // }

  // @Get()
  // findOne(
  //   @User(new ValidationPipe({ validateCustomDecorators: true })) user: any,
  // ) {
  //   console.log(user);
  // }

  @Get()
  showConnection() {
    console.log(this.connection);
    return this.connection;
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

  // @Post()
  // // @UseFilters(new HttpExceptionFilter()) // @useFilters(HttpExceptionFilter) is also valid, 路由范围
  // // @UsePipes(new ZodValidationPipe(createCatSchema))
  // create(@Body() createCatDto: CreateCatDto) {
  //   this.catsService.create(createCatDto);
  // }

  // @Post()
  // create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
  //   this.catsService.create(createCatDto);
  // }

  @Post()
  @SetMetadata('roles', ['admin'])
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
