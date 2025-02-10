import mongoose from 'mongoose'
import { DB_URI, NODE_ENV } from '../config/env.js'
import process from 'process'


if (!DB_URI) {
  throw new Error("DB_URI error")
}

const connectDb = async () => {
  try {
    await mongoose.connect(DB_URI)
    console.log(`connected to database in ${NODE_ENV} mode`, mongoose.connection.host)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDb