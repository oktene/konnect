import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from '../../shared/database/repositories/category.repositories';

@Injectable()
export class CategoryService {
  constructor(private readonly categoriesRepo: CategoryRepository){}

  async create(createCategoryDto: CreateCategoryDto) {
    
    const {nameCategory} = createCategoryDto;

    const nameCategoryExists = await this.categoriesRepo.findUnique({
      where: {
        name: nameCategory,
      },
    });

    if (nameCategoryExists) {
      throw new ConflictException("Categoria já existe.");
    }


    return await this.categoriesRepo.create({data: {name: nameCategory}});
  }

  async findAll() {
    return await this.categoriesRepo.findAll({});
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
