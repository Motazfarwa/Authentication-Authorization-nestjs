import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { User, UserSchema } from './user.schema';
import { UsersController } from './users.controller'; // Import the controller

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Register user schema with Mongoose
  ],
  controllers: [UsersController], // Register the controller
  providers: [UsersService],
  exports: [UsersService], // Make UsersService available to other modules
})
export class UsersModule {}
