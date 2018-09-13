import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  root(): string {
    return 'Hello World!!!!';
  }
}
