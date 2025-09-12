import { Injectable, Scope } from '@nestjs/common';
import { Cat } from './cats.interface';

@Injectable({ scope: Scope.REQUEST })
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
