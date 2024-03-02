import { Module } from '@nestjs/common';
import {
  ApiModule,
  Configuration,
} from '@app/api/micro-project/gen';

@Module({
  imports: [
    {
      module: ApiModule,
      providers: [
        {
          provide: Configuration,
          useValue: new Configuration({
            basePath: 'http://localhost:3002', // Provide your desired base path here
          }),
        },
      ],
    },
  ],
  exports: [ApiModule],
})
export class AxMicroProject {}
