import { ConflictException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from '../../shared/database/repositories/category.repositories';

@Injectable()
export class CategoryService {
  constructor(private readonly categoriesRepo: CategoryRepository){}

  async create(createCategoryDto: CreateCategoryDto) {  
    const { name } = createCategoryDto;

    const nameExists = await this.categoriesRepo.findUnique({
      where: {
        name,
      },
    });

    if (nameExists) {
      throw new ConflictException("Categoria já existe.");
    }

    return await this.categoriesRepo.create({
      data: { name }
    });
  }

  async findAll() {
    return await this.categoriesRepo.findAll({});
  }

  async getOneById(categoryId: string) {
    return await this.categoriesRepo.findUnique({
      where: { id: categoryId }
    })
  }

  async update(categoryId: string, updateCategoryDto: UpdateCategoryDto) {
    

    const categoryData = this.buildCategoryData(updateCategoryDto);

    return await this.categoriesRepo.update({
        where: { id: categoryId },
        data: categoryData
      });
  }

  async remove(categoryId: string) {
    return await this.categoriesRepo.remove({
      where: {
        id: categoryId
      }
    });
  }




  private buildCategoryData(categoryDto: CreateCategoryDto | UpdateCategoryDto) {
    return {
      name: categoryDto.name
    };
  }
}