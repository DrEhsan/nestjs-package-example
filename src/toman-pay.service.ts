import { Injectable, Inject } from '@nestjs/common';
import { TomanPayOptionsDto } from './dto/toman-pay-options.dto';
import { IdPayService } from './idpay/idpay.service';
import axios from 'axios';

@Injectable()
export class TomanPayService {

	constructor(
		@Inject('TOMAN_PAY_OPTIONS') 
		private tomanPayOptions: TomanPayOptionsDto,
		private idPayService: IdPayService
	) 
	{}

	async getOptions(): Promise<TomanPayOptionsDto> {
		return this.tomanPayOptions
	}

	async getPaymentMethod() {
		if (this.tomanPayOptions.payment_type == 'idpay'){
			return this.idPayService.createPayment()
		}
	}

	async createPayment() {

		
		/*
		try {
			const response = await axios.post("https://api.idpay.ir/v1.1/payment", {
				config :{
					
				},
				data: {
					'order_id': '101',
					'amount': 10000,
					'name': 'قاسم رادمان',
					'phone': '09382198592',
					'mail': 'my@site.com',
					'desc': 'توضیحات پرداخت کننده',
					'callback': 'https://example.com/callback',
				},
				headers: {
					'Content-Type': 'application/json',
					'X-API-KEY': '6a7f99eb-7c20-4412-a972-6dfb7cd253a4',
					'X-SANDBOX': 1,
				}
			})

			return response;
		} catch (error: any) {
			throw error
		}*/
   	}
}
