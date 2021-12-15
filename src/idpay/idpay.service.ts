import { Injectable, Inject } from '@nestjs/common';
import { TomanPayOptionsDto } from '../dto/toman-pay-options.dto';

@Injectable()
export class IdPayService {

    constructor(@Inject('ID_PAY_OPTIONS') private tomanPayOptions: TomanPayOptionsDto) {

	}

    async createPayment() {
        return "IdPayService"
    }
}