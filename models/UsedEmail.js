const mongoose = require('mongoose');

const UsedEmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isActive : Boolean,
});

const UsedEmail = mongoose.model('centauriUsers', UsedEmailSchema);

module.exports = UsedEmail;
