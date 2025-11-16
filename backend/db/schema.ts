import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})

const expenseSchema = new mongoose.Schema({
    name : String,
    description: String,
    amount: Number,
    tags: [ObjectId],
    userId:{
        ref:'Users',
        type:ObjectId
    }
})

const tagSchema = new mongoose.Schema({
    name : String
})

export const Users = mongoose.model('Users', userSchema);
export const Expenses = mongoose.model('Expenses', userSchema);
export const Tags = mongoose.model('Tags', userSchema);