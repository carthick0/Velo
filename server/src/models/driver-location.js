const mongoose = require('mongoose');

const driverLocationSchema = new mongoose.Schema({
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },

  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DriverLocation', driverLocationSchema);
