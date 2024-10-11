import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UUID } from 'crypto';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create a Company' })
  // async create(@Body() createCompanyDto: CreateCompanyDto) {
  //   return await this.companyService.create(createCompanyDto);
  // }

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all companies in the Konnect' })
  getAll() {
    return this.companyService.findAll();
  }

  @Get(':companyId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific company by Id' })
  getOneById(@Param() companyId: string) {
    return this.companyService.getOneById(companyId);
  }

  @Get(':companyId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific company by Company Registration' })
  getOneByCompanyRegistration(@Param() companyRegistration: string) {
    return this.companyService.getOneByCompanyRegistration(companyRegistration);
  }

  // @Get(':opportunityId')
  // @ApiBearerAuth()
  // @ApiOperation({ summary: 'Get all oppportunities of a specific company' })
  // getOpportunitiesByCompany(@Param('companyId') companyId: string) {
  //   return this.companyService.findManyOpportunities(companyId);
  // }

  @Patch(':companyId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a specific company' })
  update(@Param() companyId: UUID, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(companyId, updateCompanyDto);
  }

  @Delete(':companyId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a specific company' })
  delete(@Param() companyId: string) {
    return this.companyService.delete(companyId);
  }
}
