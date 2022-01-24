import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config"
import { CatsController } from './cats/cats.controller'
import { FishController } from './fish/fish.controller';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: [
      '.env.dev',
      '.env'
    ]
  })],
  controllers: [AppController, CatsController, FishController],
  providers: [AppService],
})
export class AppModule {}
