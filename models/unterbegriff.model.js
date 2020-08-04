const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const unterbegriffSchema = new Schema({
  oberbegriff: { type: String, required: true },
  vorzugsbenennung: { type: String, required: true },
  definition: { type: Array, required: false },
  abgelehnte_benennungen: { type: Array, required: false },
  abgrenzung_zu: { type: Array, required: false },
  betroffene_kunststoffe: { type: String, required: false },
  ursachen: { type: String, required: false },
  anmerkung: { type: String, required: false },
  bearbeitungsstatus: { type: String, possibleValues: ['in Bearbeitung','freigegeben','gesperrt']},
},
{timestamps: true});

const Unterbegriff = mongoose.model('Unterbegriff', unterbegriffSchema);

module.exports = Unterbegriff;
