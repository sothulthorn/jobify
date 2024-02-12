import Job from '../models/jobModel.js';
import { nanoid } from 'nanoid';

let jobs = [
  {
    id: nanoid(),
    company: 'apple',
    position: 'front-end',
  },
  {
    id: nanoid(),
    company: 'google',
    position: 'backend-end',
  },
];

// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};

// CREATE A JOB
export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });
  res.status(201).json({ job });
};

// GET A SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    res.status(404).json({ message: `There is no job with ${id}` });
  }
  res.status(200).json({ job });
};

// UPDATE JOB
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedJob) {
    res.status(404).json({ message: `There is no job with ${id}` });
  }

  res.status(200).json({ message: 'Job modified' });
};

// DELETE A JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  if (!removedJob) {
    res.status(404).json({ message: `There is no job with ${id}` });
  }
  res.status(200).json({ message: 'Job deleted' });
};
