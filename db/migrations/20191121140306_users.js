
exports.up = (knex) => knex.schema.createTable('users', (t) => {
  t.increments('id');
  t.string('name').notNullable();
  t.integer('age').notNullable();
  t.string('location').notNullable();
});

exports.down = (knex) => knex.schema.dropTable('users');
