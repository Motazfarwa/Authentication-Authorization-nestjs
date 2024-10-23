import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://nest:nest@cluster0.c8lul.mongodb.net/'),
    AuthModule,
    UsersModule,
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
