const mongoose = require('mongoose')
const { Schema } = mongoose
const bookingSchema = Schema({
  startTime: Date,
  endTime: Date,
  start: String,
  end: String,
  date: String,
  result_status: String,
  approve_id: { type: Schema.Types.ObjectId, ref: 'Approve' },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  room_id: { type: Schema.Types.ObjectId, ref: 'Room' }
}, {
  timestamps: true
}
)

module.exports = mongoose.model('Booking', bookingSchema)
