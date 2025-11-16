import express, { json } from 'express';
import { router as userRouter } from './routers/users.ts';
import { router as tagRouter } from './routers/tags.ts';
import { router as expenseRouter } from './routers/expenses.ts';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

await mongoose.connect(MONGODB_URI)
const app = express();
app.use(json())
app.use(cors({origin:"*"}))

app.use('/user', userRouter)
app.use('/expense', expenseRouter)
app.use('/tag', tagRouter)

app.listen(3000);