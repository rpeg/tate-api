const express = require('express');

const router = express.Router();

const Art = require('../models/Art');
const Comment = require('../models/Comment');

router.get('/', (req, res, next) => {
  Art.query().then((art) => {
    res.json(art);
  });
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  Art.query()
    .where('id', id)
    .eager('comments')
    .then((art) => {
      res.json(art);
    });
});

router.post('/:id/comments', (req, res, next) => {
  const id = parseInt(req.params.id);
  Comment.query()
    .insert({ artID: id, content: req.body.content, name: req.body.name })
    .then((user) => {
      res.json(user);
    });
});

module.exports = router;
