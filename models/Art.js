const { Model } = require('objection');
const knex = require('../db/knex');
const Comment = require('./Comment');

Model.knex(knex);

class Art extends Model {
  static get tableName() {
    return 'art';
  }

  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'users.id',
          to: 'comments.userId',
        },
      },
    };
  }
}

module.exports = Art;
