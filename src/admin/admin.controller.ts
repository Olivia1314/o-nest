import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({ path: 'admin', host: 'admin.example.com' })
export class AdminController {
  @Get()
  index(@HostParam('admin') admin: string): string {
    return admin;
  }
}
