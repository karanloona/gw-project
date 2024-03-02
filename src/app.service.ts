import { Inject, Injectable } from '@nestjs/common';
import { DefaultService } from '@app/api/micro-project/gen';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly defaultService: DefaultService) {}
  async getHello() {
    const result = await lastValueFrom(
      this.defaultService.appControllerGetHello(),
    );

    return result.data;
  }
}
