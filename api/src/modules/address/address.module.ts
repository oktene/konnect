import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { CompanyModule } from '../company/company.module';
import { ResponseHandlerService } from 'src/shared/handlers/responseHandler.service';
import { AddressRepository } from 'src/shared/database/repositories/address.repositories';

@Module({
  controllers: [AddressController],
  providers: [AddressService, AddressRepository, ResponseHandlerService],
  imports: [CompanyModule]
})
export class AddressModule {}
