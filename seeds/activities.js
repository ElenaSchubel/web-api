
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, name: 'somethibg',frequency: '3', level: '2', user_id: 99901},
        {id: 2, name: 'blah',frequency: '3', level: '2', user_id: 99902},
        {id: 3, name: 'blah',frequency: '3', level: '2', user_id: 99903},
        {id: 4, name: 'blah',frequency: '3', level: '2', user_id: 99904},
        {id: 5, name: 'blah',frequency: '3', level: '2', user_id: 99905},
        {id: 6, name: 'fnjki',frequency: '3', level: '2', user_id: 99906},
        {id: 7, name: 'fnjki',frequency: '3', level: '2', user_id: 99907},
        {id: 8, name: 'fnjki',frequency: '3', level: '2', user_id: 99908},
        {id: 9, name: 'fnjki',frequency: '3', level: '2', user_id: 99909},
        {id: 10, name: 'fnjki',frequency: '3', level: '2', user_id: 99910},
        {id: 11, name: 'fnjki',frequency: '3', level: '2', user_id: 99911},
        {id: 12, name: 'fnjki',frequency: '3', level: '2', user_id: 99912},
        {id: 13, name: 'fnjki',frequency: '3', level: '2', user_id: 99913},
        {id: 14, name: 'fnjki',frequency: '3', level: '2', user_id: 99914},
        {id: 15, name: 'fnjki',frequency: '3', level: '2', user_id: 99916},
        {id: 17, name: 'fnjki',frequency: '3', level: '2', user_id: 99917},
        {id: 18, name: 'fnjki',frequency: '3', level: '2', user_id: 99918},
        {id: 19, name: 'fnjki',frequency: '3', level: '2', user_id: 99919},
        {id: 20, name: 'fnjki',frequency: '3', level: '2', user_id: 99920},
        {id: 21, name: 'fnjki',frequency: '3', level: '2', user_id: 99921},
        {id: 22, name: 'fnjki',frequency: '3', level: '2', user_id: 99922},
        {id: 23, name: 'fnjki',frequency: '3', level: '2', user_id: 99923},
        {id: 24, name: 'fnjki',frequency: '3', level: '2', user_id: 99924},
        {id: 25, name: 'fnjki',frequency: '3', level: '2', user_id: 99925},
        {id: 26, name: 'fnjki',frequency: '3', level: '2', user_id: 99926},
      ]);
    });
};
