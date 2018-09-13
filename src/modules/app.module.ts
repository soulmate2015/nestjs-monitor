import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from './@config/config.module';
import { AuthModule } from './@auth/Auth.module';
import { AuthService } from './@auth/auth.service';

@Module({
  imports: [
    ConfigModule,
    TestModule,
    UserModule,
    AuthModule,
  ],
  providers: [AuthService],
})
export class ApplicationModule {}
