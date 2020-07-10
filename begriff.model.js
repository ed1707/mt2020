const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const begriffSchema = new Schema({
  oberbegriff: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true
});

const Begriff = mongoose.model('Begriff', begriffSchema);

module.exports = Begriff;
