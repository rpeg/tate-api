const path = require('path');
const { transformer, transfomerHeader: transformerHeader } = require('knex-csv-transformer');

exports.seed = (knex, Promise) => knex('art').del().then(() => {
  transformer.seed({
    table: 'art',
    file: path.join(__dirname, '../csv/the-tate-collection.csv'),
    transformers: [
      transformerHeader('title', 'title'),
      transformerHeader('artist', 'artist'),
      transformerHeader('year', 'year')],
  });
});
