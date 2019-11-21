const express = require('express');

const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res, next) => {
  User.query().then((users) => {
    res.json(users);
  });
});


router.post('/', (req, res, next) => {
  User.query()
    .insert({ age: req.body.age, name: req.body.name, location: req.body.location })
    .then((user) => {
      res.json(user);
    });
});

module.exports = router;
