import express from 'express';
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controller/userController.js';

import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
import { authorizePermissions } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', [
  authorizePermissions('admin'),
  getApplicationStats,
]);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;
