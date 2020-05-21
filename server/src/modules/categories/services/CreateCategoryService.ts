import { getRepository } from 'typeorm';

import Category from '../infra/typeorm/entities/Category';

interface Request {
  title: string;
}

class CreateCategoryService {
  public async execute({ title }: Request): Promise<Category> {
    const categoryRepository = getRepository(Category);

    const checkCategory = await categoryRepository.findOne({
      where: { title },
    });

    if (checkCategory) {
      return checkCategory;
    }

    const newCategory = categoryRepository.create({ title });

    await categoryRepository.save(newCategory);

    return newCategory;
  }
}

export default CreateCategoryService;
