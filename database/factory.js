'use strict';

/*
|--------------------------------------------------------------------------
| Model and Database Factory
|--------------------------------------------------------------------------
|
| Factories let you define blueprints for your database models or tables.
| These blueprints can be used with seeds to create fake entries. Also
| factories are helpful when writing tests.
|
*/

const Factory = use('Factory');

/*
|--------------------------------------------------------------------------
| User Model Blueprint
|--------------------------------------------------------------------------
*/
Factory.blueprint('App/Model/User', (fake) => {
  return {
    username: fake.username(),
    email: fake.email(),
    avatar: fake.domain()
  };
});

/*
|--------------------------------------------------------------------------
| Submission Model Blueprint
|--------------------------------------------------------------------------
*/
// Factory.blueprint('App/Model/Submission', (fake) => {
//   return {
//     // username: fake.username(),
//     submitted_to: fake.word(),
//     submission_method: fake.domain(),
//     // contact_information: fake.email(),
//     // due_date: fake.date({string: true, american: false}),
//     // submitted_date: fake.date({string: true, american: false}),
//     // status: fake.word(),
//     // link_to_listing: fake.domain(),
//     // notes: fake.paragraph(),
//     // draft_url: fake.domain()
//   };
// });
