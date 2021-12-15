import { Module, DynamicModule } from '@nestjs/common';
import { TomanPayService } from './toman-pay.service';
import { TomanPayOptionsDto } from './dto/toman-pay-options.dto';
import { IdPayModule } from './idpay/idpay.module';
import { IdPayService } from './idpay/idpay.service';

@Module({})
export class TomanPayModule {
  static register(options: TomanPayOptionsDto) : DynamicModule {
    return {
      module: TomanPayModule,
      imports: [IdPayModule.register(options)],
      providers: [
        {
          provide: 'TOMAN_PAY_OPTIONS',
          useValue: options,
        },
        TomanPayService
      ],
      exports: [TomanPayService],
    }
  }
}
