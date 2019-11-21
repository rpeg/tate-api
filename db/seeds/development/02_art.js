/* eslint-disable no-cond-assign */
const path = require('path');
const { transformer, transfomerHeader: transformerHeader } = require('knex-csv-transformer');
const parse = require('csv-parse');
const fs = require('fs');

const chunks = [];


// We can use this variable to store the final data
let fileBuffer;
// Read file into stream.Readable
const fileStream = fs.createReadStream(path.join(__dirname, '../csv/the-tate-collection.csv'));

// An error occurred with the stream
fileStream.once('error', (err) => {
  // Be sure to handle this properly!
  console.error(err);
}).once('end', () => {
  // create the final data Buffer from data chunks;
  fileBuffer = Buffer.concat(chunks);

  // Of course, you can do anything else you need to here, like emit an event!
});

const artWorks = [];

parse(fileBuffer, {
  trim: true,
  skip_empty_lines: true,
})
// Use the readable stream api
  .on('readable', () => {
    let record;
    while (record = this.read()) {
      const art = {
        title: record.title,
        artist: record.artist,
        year: record.year,
        location: record.location,
      };

      artWorks.push(art);
    }
  });


exports.seed = (knex) => knex('art').del()
  .then(() => knex('art').insert(artWorks));
