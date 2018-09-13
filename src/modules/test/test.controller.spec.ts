import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './test.controller';
import { TestService } from './test.service';

describe('TestController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const testController = app.get<TestController>(TestController);
      expect(testController.root()).toBe('Hello World!');
    });
  });
});
