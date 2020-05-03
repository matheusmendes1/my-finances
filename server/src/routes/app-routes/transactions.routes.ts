import { Router } from 'express';

import { parseISO } from 'date-fns';

import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../../repositories/TransactionsRepository';

import ensureAuthenticated from '../../middlewares/ensureAuthenticated';
import CreateTransactionService from '../../services/CreateTransactionService';
import DeleteTransactionService from '../../services/DeleteTransactionService';

const transactionsRouter = Router();

transactionsRouter.use(ensureAuthenticated);

transactionsRouter.get('/', async (request, response) => {
  // eslint-disable-next-line no-console
  console.log(request.user);

  const transactionsRepository = getCustomRepository(TransactionsRepository);

  const transactions = await transactionsRepository.find();
  const balance = await transactionsRepository.getBalance();

  return response.json({ transactions, balance });
});

transactionsRouter.post('/', async (request, response) => {
  try {
    const {
      user_id,
      date,
      value,
      type,
      description,
      bank,
      category,
    } = request.body;

    const parsedDate = parseISO(date);

    const createTransaction = new CreateTransactionService();

    const transaction = await createTransaction.execute({
      user_id,
      date: parsedDate,
      value,
      type,
      description,
      bank,
      category,
    });

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionsRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const deleteTransaction = new DeleteTransactionService();
    deleteTransaction.execute({ id });

    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionsRouter;
