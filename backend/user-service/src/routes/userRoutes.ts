import { Router } from 'express';
import { createUser, updateUser, getUser, getUsers } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.put('/:id', updateUser);
router.get('/:id', getUser);
router.get('/', getUsers);

export default router;
