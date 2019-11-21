const path = require('path');
const { transformer, transfomerHeader: transformerHeader } = require('knex-csv-transformer');

exports.seed = (knex) => transformer.seed({
  table: 'art',
  file: path.join(__dirname, '../csv/the-tate-collection.csv'),
  transformers: [
    transformerHeader('id', 'id'),
    transformerHeader('title', 'title'),
    transformerHeader('artist', 'artist'),
    transformerHeader('year', 'year')],
});
