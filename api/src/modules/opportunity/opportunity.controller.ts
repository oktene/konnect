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
  @ApiOperation({ summary: 'Get all users in the Konnect' })
  create(@Body() createOpportunityDto: CreateOpportunityDto) {
    return this.opportunityService.create(createOpportunityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users in the Konnect' })
  findAll() {
    return this.opportunityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all users in the Konnect' })
  async findOne(@Param('id') id: string) {
    return await this.opportunityService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Get all users in the Konnect' })
  update(@Param('id') id: string, @Body() updateOpportunityDto: UpdateOpportunityDto) {
    return this.opportunityService.update(+id, updateOpportunityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Get all users in the Konnect' })
  remove(@Param('id') id: string) {
    return this.opportunityService.remove(+id);
  }
}
