import mongoose from 'mongoose'

export async function connectDB() {
  const mongoUri = process.env.MONGO_URI

  if (!mongoUri) {
    throw new Error('MONGO_URI is required in the environment.')
  }

  const connection = await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 8000,
  })
  console.log(`MongoDB connected: ${connection.connection.host}`)
}
