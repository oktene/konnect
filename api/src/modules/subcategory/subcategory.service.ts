import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { SubcategoryRepository } from 'src/shared/database/repositories/subcategory.repositories';
import { CategoryRepository } from 'src/shared/database/repositories/category.repositories';

@Injectable()
export class SubcategoryService {
  constructor(
    private readonly subcategoriesRepo: SubcategoryRepository,
  ) {}

  async create(createSubcategoryDto: CreateSubcategoryDto) {
    const { name, categoryId } = createSubcategoryDto
    
    const subcategoryExists = await this.subcategoriesRepo.findFirst({
      where: {
        name,
        categoryId
      }
    });
    
    if (subcategoryExists) throw new ConflictException('Subcategoria já cadastrada nessa categoria.');

    return await this.subcategoriesRepo.create({
      data: createSubcategoryDto
    });
  }

  async findAll() {
    return await this.subcategoriesRepo.findAll({});
  }

  async findOne(subcategoryId: string) {
    return await this.subcategoriesRepo.findUnique({
      where: { id: subcategoryId },
    });
  }

  update(subcategoryId: string, updateSubcategoryDto: UpdateSubcategoryDto) {
    const { name, categoryId } = updateSubcategoryDto;

    if (!name && !categoryId) {
      throw new Error('Nenhum campo para atualizar foi fornecido');
    }

    return this.subcategoriesRepo.update({
      where: { id: subcategoryId },
      data: { 
        //Usado para incluir condicionalmente um campo no objeto data. Se o campo name ou categoryId estiver presente, ele será incluído no objeto data e, portanto, será atualizado. Caso contrário, ele será ignorado.
        ...(name && { name }),
        ...(categoryId && { categoryId }) 
      }
    })
  }

  async remove(subcategoryId: string) {
    return await this.subcategoriesRepo.delete({
      where: { id: subcategoryId }
    });
  }
}
