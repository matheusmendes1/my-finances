import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();

    const { income, outcome } = transactions.reduce(
      (sum: Balance, transaction: Transaction) => {
        if (transaction.type === 'income') {
          // eslint-disable-next-line no-param-reassign
          sum.income += transaction.value;
        }

        if (transaction.type === 'outcome') {
          // eslint-disable-next-line no-param-reassign
          sum.outcome += transaction.value;
        }

        return sum;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );

    const total = income - outcome;

    return { income, outcome, total };
  }
}

export default TransactionsRepository;
