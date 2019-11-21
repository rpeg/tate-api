const path = require('path');
const { transformer, transformerHeader } = require('knex-csv-transformer');

exports.seed = transformer.seed({
  table: 'art',
  file: path.join(__dirname, '../csv/the-tate-collection.csv'),
  transformers: [
    transformerHeader('id', 'id'),
    transformerHeader('title', 'title'),
    transformerHeader('artist', 'artist'),
    transformerHeader('year', 'year')],
});
