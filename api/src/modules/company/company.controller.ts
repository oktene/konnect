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

@ApiBearerAuth()
@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @ApiOperation({ summary: 'Create a Company' })
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.companyService.create(createCompanyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all companies in the Konnect' })
  getAll() {
    return this.companyService.findAll();
  }

  @Get(':companyId')
  @ApiOperation({ summary: 'Get a specific company by Id' })
  getOneById(@Param() companyId: string) {
    return this.companyService.findUnique(companyId);
  }

  @Get(':opportunityId')
  @ApiOperation({ summary: 'Get all oppportunities of a specific company' })
  getOpportunitiesByCompany(@Param('companyId') companyId: string) {
    return this.companyService.findManyOpportunities(companyId);
  }

  @Patch(':companyId')
  @ApiOperation({ summary: 'Update a specific company' })
  update(@Param() companyId: UUID, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(companyId, updateCompanyDto);
  }

  @Delete(':companyId')
  @ApiOperation({ summary: 'Delete a specific company' })
  delete(@Param() companyId: string) {
    return this.companyService.delete(companyId);
  }
}
