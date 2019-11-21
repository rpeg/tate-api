const path = require('path');
const { transformer, transfomerHeader } = require('knex-csv-transformer');

exports.seed = (knex, Promise) => knex('art').del().then(() => {
  transformer.seed({
    table: 'art',
    file: path.join(__dirname, '../csv/the-tate-collection.csv'),
    transformers: [
      transfomerHeader('title', 'title'),
      transfomerHeader('artist', 'artist'),
      transfomerHeader('year', 'year')],
  });
});
