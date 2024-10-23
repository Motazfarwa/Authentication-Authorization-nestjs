// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './roles.guard';
import { jwtConstants } from './constants';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule, // Import UsersModule to access UsersService for authentication
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, // Your secret key for JWT signing
      signOptions: { expiresIn: '60s' }, // Token expiry time
    }),
  ],
  controllers:[AuthController],
  providers: [AuthService, JwtStrategy, RolesGuard],
  exports: [AuthService, JwtModule, PassportModule], // Export to make it available in other modules
})
export class AuthModule {}
