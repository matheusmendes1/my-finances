import { getCustomRepository } from 'typeorm';

import { startOfHour } from 'date-fns';

import TransactionsRepository from '../infra/typeorm/repositories/TransactionsRepository';
import Transaction from '../infra/typeorm/entities/Transaction';

import CreateCategoryService from '../../categories/services/CreateCategoryService';
import AppError from '../../../shared/errors/AppError';

interface Request {
  user_id: string;
  date: Date;
  value: number;
  type: 'income' | 'outcome';
  description: string;
  bank: string;
  category: string;
}

class CreateTransactionService {
  public async execute({
    user_id,
    date,
    value,
    type,
    description,
    bank,
    category,
  }: Request): Promise<Transaction> {
    const createCategory = new CreateCategoryService();
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const balance = await transactionRepository.getBalance();

    const transactionDate = startOfHour(date);

    const newCategory = await createCategory.execute({ title: category });

    if (type === 'outcome') {
      if (balance.total - value < 0) {
        throw new AppError('A balance error has ocurred');
      }
    }

    const transaction = transactionRepository.create({
      user_id,
      date: transactionDate,
      value,
      type,
      description,
      bank,
      category_id: newCategory.id,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
