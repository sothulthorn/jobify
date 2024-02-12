import express from 'express';
import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from '../controller/jobController.js';

const router = express.Router();

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJob, updateJob, deleteJob);

export default router;