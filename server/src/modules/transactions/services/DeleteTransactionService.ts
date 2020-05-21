import { getRepository } from 'typeorm';
import Transaction from '../infra/typeorm/entities/Transaction';

import AppError from '../../../shared/errors/AppError';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionRepository = getRepository(Transaction);
    const transaction = await transactionRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Could not find the record');
    }

    await transactionRepository.delete(transaction.id);
  }
}

export default DeleteTransactionService;
