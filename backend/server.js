import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import jobRouter from './routes/jobRouter.js';
import errorHandleMiddleware from './middleware/errorHandlerMiddleware.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'data receive', data: req.body });
});

// ROUTERS
app.use('/api/v1/jobs', jobRouter);

// NOT FOUND MIDDLEWARE
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Resource not found' });
});

// ERROR HANDLER MIDDLEWARE
app.use(errorHandleMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
