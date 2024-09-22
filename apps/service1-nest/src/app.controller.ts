import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(@Query('name') name: string = 'World'): string {
    return this.appService.getHello(name);
  }
}
