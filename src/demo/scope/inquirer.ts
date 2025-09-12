import { Inject, Injectable, Scope } from '@nestjs/common';
import { INQUIRER } from '@nestjs/core';

@Injectable({ scope: Scope.TRANSIENT })
export class HelloService {
  constructor(@Inject(INQUIRER) private inquirer: object) {}

  sayHello(message: string) {
    console.log(`${this.inquirer.constructor.name}: ${message}`);
  }
}

// -----------------------

@Injectable()
export class HelloController {
  constructor(private helloService: HelloService) {}

  getRoot() {
    this.helloService.sayHello('Hello World!');
  }
}
