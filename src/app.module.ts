import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxMicroProject } from '@app/api/micro-project';

@Module({
  imports: [AxMicroProject],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
