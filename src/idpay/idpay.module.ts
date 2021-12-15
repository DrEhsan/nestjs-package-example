import { Module, DynamicModule } from '@nestjs/common';
import { TomanPayOptionsDto } from '../dto/toman-pay-options.dto';
import { IdPayService } from './idpay.service';

@Module({})
export class IdPayModule {
  static register(options: TomanPayOptionsDto) : DynamicModule {
    return {
      module: IdPayModule,
      providers: [
        {
          provide: 'ID_PAY_OPTIONS',
          useValue: options,
        },
        IdPayService
      ],
      exports: [IdPayService],
    }
  }
}
