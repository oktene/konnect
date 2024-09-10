import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OpportunityService } from './opportunity.service';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/shared/decorators/role.decorator';
import { RolesGuard } from 'src/shared/guards/roles.guard';
import { Role as UserRole } from 'src/shared/enums/role.enum';

@ApiBearerAuth()
@ApiTags('Opportunity')
@Controller('opportunity')
@UseGuards(RolesGuard)
@Roles(UserRole.COMPRADOR || UserRole.AMBOS)
export class OpportunityController {
  constructor(private readonly opportunityService: OpportunityService) {}

  @Post()
  @ApiOperation({ summary: 'Create an opportunity' })
  create(@Body() createOpportunityDto: CreateOpportunityDto) {
    return this.opportunityService.create(createOpportunityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all opportunities in the Konnect' })
  getAll() {
    return this.opportunityService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an specific opportunity in the Konnect' })
  async getOneById(@Param('id') opportunityId: string) {
    return await this.opportunityService.getOneById(opportunityId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an opportunity' })
  update(@Param('id') opportunityId: string, @Body() updateOpportunityDto: UpdateOpportunityDto) {
    return this.opportunityService.update(opportunityId, updateOpportunityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an opportunity' })
  delete(@Param('id') opportunityId: string) {
    return this.opportunityService.delete(opportunityId);
  }
}
