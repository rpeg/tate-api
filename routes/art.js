const express = require('express');

const router = express.Router();

const Art = require('../models/Art');
const Comment = require('../models/Comment');

router.get('/', (req, res, next) => {
  Art.query()
    .eager('comments')
    .omit(['artID'])
    .then((art) => {
      res.json(art);
    });
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  Art.query()
    .where('id', id)
    .eager('comments')
    .omit(['artID'])
    .then((art) => {
      res.json(art);
    });
});

router.post('/:id/comments', (req, res, next) => {
  const id = parseInt(req.params.id);

  if (req.body.userID) {
    Comment.query()
      .insert({
        artID: id, userID: req.body.userID, content: req.body.content, name: req.body.name,
      })
      .then((user) => {
        res.json(user);
      });
  } else { // non-user can only have one comment by name
    Comment.query()
      .where('artID', id)
      .then((comments) => {
        const nonUserCommentsWithSameName = comments
          .filter((c) => c.userID === null && c.name === req.body.name);

        if (nonUserCommentsWithSameName.length === 0) {
          Comment.query()
            .insert({
              artID: id, userID: null, content: req.body.content, name: req.body.name,
            })
            .then((user) => {
              res.json(user);
            });
        } else {
          res.sendStatus(403);
        }
      });
  }
});

module.exports = router;
