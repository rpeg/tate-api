const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex);

class Comment extends Model {
  static get tableName() {
    return 'comments';
  }
}

module.exports = Comment;
