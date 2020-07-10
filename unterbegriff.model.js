const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unterbegriffSchema = new Schema({
  oberbegriff: { type: String, required: true },
  vorzugsbenennung: { type: String, required: true },
  definition: { type: Array, required: false },
  weitere_benennungen: { type: Array, required: false },
  betroffene_kunststoffe: { type: String, required: false },
  abgrenzung_zu: { type: Array, required: false },
  anmerkung: { type: String, required: false }
},
{
  timestamps: true
});

const Unterbegriff = mongoose.model('Unterbegriff', unterbegriffSchema);

module.exports = Unterbegriff;
