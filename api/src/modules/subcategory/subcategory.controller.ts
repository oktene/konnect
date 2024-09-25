import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PermissionsLevelsGuard } from 'src/shared/guards/permissionLevels.guard';
import { Permissions } from 'src/shared/decorators/permission.decorator';
import { PermissionLevel } from 'src/shared/enums/permissionLevel.enum';

@ApiBearerAuth()
@ApiTags('Subcategory')
@Controller('subcategory')
@UseGuards(PermissionsLevelsGuard)
@Permissions(PermissionLevel.EDITOR)
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a subcategory' })
  create(@Body() createSubcategoryDto: CreateSubcategoryDto) {
    return this.subcategoryService.create(createSubcategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all subcategories' })
  getAll() {
    return this.subcategoryService.findAll();
  }

  @Get(':subcategoryId')
  @ApiOperation({ summary: 'Get a specific subcategory' })
  getOneById(@Param('subcategoryId') subcategoryId: string) {
    return this.subcategoryService.findOne(subcategoryId);
  }

  @Patch(':subcategoryId')
  update(@Param('subcategoryId') subcategoryId: string, @Body() updateSubcategoryDto: UpdateSubcategoryDto) {
    return this.subcategoryService.update(subcategoryId, updateSubcategoryDto);
  }

  @Delete(':subcategoryId')
  remove(@Param('subcategoryId') subcategoryId: string) {
    return this.subcategoryService.remove(subcategoryId);
  }
}
