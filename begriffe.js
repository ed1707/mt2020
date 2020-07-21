const router = require('express').Router();
let Begriff = require('../models/begriff.model');

router.route('/').get((req, res) => {
  Begriff.find()
    .then(begriffe => res.json(begriffe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const oberbegriff = req.body.oberbegriff;
  const alternative_benennung = req.body.alternative_benennung;


  const newBegriff = new Begriff({oberbegriff});

  newBegriff.save()
    .then(() => res.json('Begriff added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
