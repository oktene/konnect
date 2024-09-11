import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create a category' })
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories in the Konnect' })
  getAll() {
    return this.categoryService.findAll();
  }

  @Get(':categoryId')
  @ApiOperation({ summary: 'Get a specific category by ID' })
  getCategoryById(@Param('categoryId') categoryId: string) {
    return this.categoryService.findOne(categoryId);
  }

  @Get(':categoryId')
  @ApiOperation({ summary: 'Get all subcategories of a specific category' })
  getSubcategoriesByCategory(@Param('categoryId') categoryId: string) {
    return this.categoryService.findMany(categoryId);
  }

  @Patch(':categoryId')
  @ApiOperation({ summary: 'Update a specific category' })
  update(@Param('categoryId') categoryId: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(categoryId, updateCategoryDto);
  }

  @Delete(':categoryId')
  @ApiOperation({ summary: 'Delete a specific category' })
  remove(@Param('categoryId') categoryId: string) {
    return this.categoryService.remove(categoryId);
  }
}
