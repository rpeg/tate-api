/* eslint-disable no-cond-assign */
const path = require('path');
const { transformer, transfomerHeader: transformerHeader } = require('knex-csv-transformer');
const parse = require('csv-parse');
const fs = require('fs');

const artWorks = [];
const parser = parse({ delimiter: ';', columns: ['id', 'title', 'artist', 'year'] }, (err, data) => {
  console.log(data);
});

fs.createReadStream(path.join(__dirname, '/the-tate-collection.csv')).pipe(parser);


exports.seed = (knex) => knex('art').insert(artWorks);
