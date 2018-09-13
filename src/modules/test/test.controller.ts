import { Get, Controller } from '@nestjs/common';
import { TestService } from './test.service';

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  root(): string {
    return this.testService.root();
  }
}
