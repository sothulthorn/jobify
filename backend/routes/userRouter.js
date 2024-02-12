import express from 'express';
import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from '../controller/userController.js';

const router = express.Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', getApplicationStats);
router.patch('/update-user', updateUser);

export default router;
