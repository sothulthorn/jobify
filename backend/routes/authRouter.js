import express from 'express';
import { register, login } from '../controller/authController.js';
import { validateRegisterInput } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', login);

export default router;
