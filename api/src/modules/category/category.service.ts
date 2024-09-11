import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from '../../shared/database/repositories/category.repositories';

@Injectable()
export class CategoryService {
  constructor(private readonly categoriesRepo: CategoryRepository){}

  async create(createCategoryDto: CreateCategoryDto) {  
    const { nameCategory } = createCategoryDto;

    const nameCategoryExists = await this.categoriesRepo.findUnique({
      where: {
        name: nameCategory,
      },
    });

    if (nameCategoryExists) {
      throw new ConflictException("Categoria já existe.");
    }

    return await this.categoriesRepo.create({
      data: { name: nameCategory }
    });
  }

  async findAll() {
    return await this.categoriesRepo.findAll({});
  }

  findOne(id: string) {
    return `This action returns a #${id} category`;
  }

  findMany(id: string) {
    return `This action returns a #${id} category`;
  }

  update(categoryId: string, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${categoryId} category`;
  }

  remove(categoryId: string) {
    return `This action removes a #${categoryId} category`;
  }
}