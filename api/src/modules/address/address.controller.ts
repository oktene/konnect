import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() createAddressDto: CreateAddressDto) {
    return this.addressService.create(createAddressDto);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':addressId')
  findOne(@Param('addressId') addressId: string) {
    return this.addressService.findOne(addressId);
  }

  @Patch(':addressId')
  update(@Param('addressId') addressId: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(addressId, updateAddressDto);
  }

  @Delete(':addressId')
  remove(@Param('addressId') addressId: string) {
    return this.addressService.remove(addressId);
  }
}
