
exports.seed = (knex) => knex('users').del()
  .then(() => knex('users').insert([
    { age: 20, name: 'Michel', location: 'Paris' },
    { age: 24, name: 'Sean', location: 'Sacramento' },
    { age: 26, name: 'Gilles', location: 'Berkeley' },
  ]));
