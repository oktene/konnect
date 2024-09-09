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

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific subcategory' })
  getOneById(@Param('id') subcategoryId: string) {
    return this.subcategoryService.findOne(subcategoryId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all subcategories specific subcategory' })
  getSubcategoriesByCategory(@Param('id') categoryId: string) {
    return this.subcategoryService.findOne(categoryId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubcategoryDto: UpdateSubcategoryDto) {
    return this.subcategoryService.update(+id, updateSubcategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subcategoryService.remove(+id);
  }
}
