import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  listaRepositorios(): string {
    return 'Hello World!';
  }
}
