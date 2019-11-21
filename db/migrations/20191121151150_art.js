
exports.up = (knex) => knex.schema.createTable('art', (t) => {
  t.increments('id');
  t.string('title').notNullable();
  t.string('artist').notNullable();
  t.integer('year').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('art');
