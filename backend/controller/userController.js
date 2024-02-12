import { StatusCodes } from 'http-status-codes';
import User from '../models/userModel.js';
import Job from '../models/jobModel.js';

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Get Current User' });
};

export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Application Stats' });
};

export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Update User' });
};
