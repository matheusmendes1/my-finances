import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '@config/upload';
import multer from 'multer';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const upload = multer(uploadConfig.multer);

const usersRouter = Router();

const usersController = new UsersController();
const avatarController = new UserAvatarController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  avatarController.update
);

export default usersRouter;
