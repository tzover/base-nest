import { Controller, Get } from '@nestjs/common';

@Controller('v1/fish')
export class FishController {
  @Get()
  findAll():string{
    return 'This action returns all fish';
  }

}
