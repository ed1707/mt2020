const router = require('express').Router();
let Unterbegriff = require('../models/unterbegriff.model');

router.route('/').get((req, res) => {
  Unterbegriff.find()
    .then(unterbegriffe => res.json(unterbegriffe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const oberbegriff = req.body.oberbegriff;
  const vorzugsbenennung = req.body.vorzugsbenennung;
  const definition = req.body.definition;
  const abgelehnte_benennungen = req.body.abgelehnte_benennungen;
  const abgrenzung_zu = req.body.abgrenzung_zu;
  const betroffene_kunststoffe = req.body.betroffene_kunststoffe;
  const ursachen = req.body.ursachen;
  const anmerkung = req.body.anmerkung;
  const bearbeitungsstatus = req.body.bearbeitungsstatus;
  const date = Date.parse(req.body.date);

  const newUnterbegriff = new Unterbegriff({
    oberbegriff,
    vorzugsbenennung,
    definition,
    abgelehnte_benennungen,
    abgrenzung_zu,
    betroffene_kunststoffe,
    ursachen,
    anmerkung,
    bearbeitungsstatus,
    date,
  });

  newUnterbegriff.save()
  .then(() => res.json('Unterbegriff added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Unterbegriff.findById(req.params.id)
    .then(unterbegriff => res.json(unterbegriff))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Unterbegriff.findByIdAndDelete(req.params.id)
    .then(() => res.json('Unterbegriff deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Unterbegriff.findById(req.params.id)
    .then(unterbegriff => {
      unterbegriff.oberbegriff = req.body.oberbegriff;
      unterbegriff.vorzugsbenennung = req.body.vorzugsbenennung;
      unterbegriff.definition = req.body.definition;
      unterbegriff.abgelehnte_benennungen = req.body.abgelehnte_benennungen;
      unterbegriff.abgrenzung_zu = req.body.abgrenzung_zu;
      unterbegriff.betroffene_kunststoffe= req.body.betroffene_kunststoffe;
      unterbegriff.ursachen = req.body.ursachen;
      unterbegriff.anmerkung = req.body.anmerkung;
      unterbegriff.bearbeitungsstatus = req.body.bearbeitungsstatus;
      unterbegriff.date = Date.parse(req.body.date);

      unterbegriff.save()
        .then(() => res.json('Unterbegriff updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
