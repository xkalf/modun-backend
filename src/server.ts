import http from 'http'
import mongoose from 'mongoose'
import app from './app'

const PORT = process.env.PORT || 8000
const MONGO_URL = 'mongodb+srv://user:user@amazon.2trud.mongodb.net/modun?retryWrites=true&w=majority'

const server = http.createServer(app)

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!')
})

mongoose.connection.on('error', (err: String) => {
  console.error(err)
})

async function startServer () {
  await mongoose.connect(MONGO_URL)
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} ...`)
  })
}

startServer()
