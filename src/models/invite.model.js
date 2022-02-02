import mongoose from 'mongoose'

const inviteModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  inviteUrl: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Invite || mongoose.model('Invite', inviteModel)
