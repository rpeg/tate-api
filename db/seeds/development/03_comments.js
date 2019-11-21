
exports.seed = (knex) => knex('comments').del()
  .then(() => knex('comments').insert([
    { artID: 20400, content: 'Test comment', name: 'Gilles' },
  ]));
