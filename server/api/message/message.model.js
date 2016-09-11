import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  img: String,
  text: String,
  notify: String,
  blocked: Boolean,
  date:{ type: Date, default: Date.now }
})

export default mongoose.model('Message', MessageSchema)
