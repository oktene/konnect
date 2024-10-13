import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PermissionsLevelsGuard } from 'src/shared/guards/permissionLevels.guard';
import { Permissions } from 'src/shared/decorators/permission.decorator';
import { PermissionLevel } from 'src/shared/enums/permissionLevel.enum';

@ApiBearerAuth()
@ApiTags('Category')
@Controller('category')
@UseGuards(PermissionsLevelsGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  
  @Post()
  @Permissions(PermissionLevel.EDITOR)
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
    return this.categoryService.getOneById(categoryId);
  }

  @Patch(':categoryId')
  @Permissions(PermissionLevel.EDITOR)
  @ApiOperation({ summary: 'Update a specific category' })
  update(@Param('categoryId') categoryId: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(categoryId, updateCategoryDto);
  }

  @Delete(':categoryId')
  @Permissions(PermissionLevel.EDITOR)
  @ApiOperation({ summary: 'Delete a specific category' })
  remove(@Param('categoryId') categoryId: string) {
    return this.categoryService.remove(categoryId);
  }
}
