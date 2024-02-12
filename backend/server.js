import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';

const app = express();

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

app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({ jobs });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
