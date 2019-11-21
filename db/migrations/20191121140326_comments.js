
exports.up = (knex) => knex.schema.createTable('comments', (t) => {
  t.increments('id');
  t.integer('artID').references('id').inTable('art');
  t.string('content').notNullable();
  t.string('name').nullable();
  t.integer('userID').nullable();
});

exports.down = (knex) => knex.schema.dropTable('comments');
