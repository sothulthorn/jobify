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
  res.status(200).json({ jobs });
};

// CREATE A JOB
export const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(404).json({ message: 'Please provide company or position' });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
};

// GET A SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res.status(404).json({ message: `There is no job with ${id}` });
  }
  res.status(200).json({ job });
};

// UPDATE JOB
export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(404).json({ message: 'Please provide company or position' });
  }

  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res.status(404).json({ message: `There is no job with ${id}` });
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ message: `Job modified ${job}` });
};

// DELETE A JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res.status(404).json({ message: `There is no job with ${id}` });
  }

  const newJobs = jobs.filter((job) => job.id === id);
  jobs = newJobs;

  res.status(200).json({ message: 'Job deleted' });
};
