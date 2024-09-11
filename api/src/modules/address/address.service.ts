import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { CompanyRepository } from 'src/shared/database/repositories/company.repositories';
import { ResponseHandlerService } from 'src/shared/handlers/responseHandler.service';
import { AddressRepository } from 'src/shared/database/repositories/address.repositories';

@Injectable()
export class AddressService {
  constructor(
    private readonly companiesRepo: CompanyRepository,
    private readonly addressesRepo: AddressRepository,
    private readonly responseHandler: ResponseHandlerService
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    const { companyId } = createAddressDto

    const companyExists = await this.companiesRepo.findUnique({
      where: { id: companyId },
    });

    if (!companyExists) {
      return this.responseHandler.error(`The company doesn't exist`, 401);
      throw new NotFoundException('A empresa não existe.');
    }

    const addressData = this.buildOpportunityData(createAddressDto, companyId)
    return this.addressesRepo.create({ data: addressData })
  }

  findAll() {
    return this.addressesRepo.findAll({})
  }

  findOne(addressId: string) {
    return this.addressesRepo.findUnique({
      where: {
        id: addressId
      }
    })
  }

  async update(addressId: string, updateAddressDto: UpdateAddressDto) {
    const addressData = this.buildOpportunityData(updateAddressDto, addressId);

    return await this.addressesRepo.update({
      where: { id: addressId },
      data: addressData
    });
  }

  remove(addressId: string) {
    return this.addressesRepo.remove({
      where: {
        id: addressId
      }
    })
  }

  private buildOpportunityData(
    addressDto: CreateAddressDto | UpdateAddressDto,
    companyId: string
  ) {
    return {
      street: addressDto.street,
      number: addressDto.number,
      city: addressDto.city,
      state: addressDto.state,
      zipCode: addressDto.zipCode,
      country: addressDto.country,
      neighborhood: addressDto.neighborhood,
      isMatriz: addressDto.isMatriz,
      company: {
        connect: { id: companyId },
      },
    };
  }
}
