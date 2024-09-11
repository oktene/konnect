import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Subcategory')
@Controller('subcategory')
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
