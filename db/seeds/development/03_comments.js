
exports.seed = (knex) => knex('users').del()
  .then(() => knex('users').insert([
    { artID: 20400, content: 'Test comment', name: 'Gilles' },
  ]));
