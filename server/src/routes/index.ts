import { Router } from 'express';

import usersRouter from './app-routes/users.routes';
import sessionsRouter from './app-routes/sessions.routes';
import transactionsRouter from './app-routes/transactions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/transactions', transactionsRouter);

export default routes;
