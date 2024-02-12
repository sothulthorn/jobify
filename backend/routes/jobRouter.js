import express from 'express';
import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from '../controller/jobController.js';
import { validateJobInput } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router
  .route('/:id')
  .get(getJob)
  .delete(deleteJob)
  .patch(validateJobInput, updateJob);

export default router;
