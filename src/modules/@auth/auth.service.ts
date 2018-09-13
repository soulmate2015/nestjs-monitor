import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {


  // Create token
  async createToken() {
    const user: JwtPayload = { email: 'user@email.com' };
    return jwt.sign(user, 'secretKey', { expiresIn: 3600 });
  }

  // Validate user
  async validateUser(payload: JwtPayload): Promise<any> {
    // return await this.usersService.findOneByEmail(payload.email);
    
    if (!payload) {
      return false;
    }
    return true;
  }
}
