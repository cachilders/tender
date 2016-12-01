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
// Factory.blueprint('App/Model/User', (fake) => {
//   return {
//     username: fake.username(),
//     email: fake.email(),
//     avatar: fake.domain()
//   };
// });

/*
|--------------------------------------------------------------------------
| Submission Model Blueprint
|--------------------------------------------------------------------------
*/
Factory.blueprint('App/Model/Submission', (fake) => {
  return {
    user_id: 'cachilders@gmail.com',
    submitted_to: fake.word(),
    submission_method: fake.domain(),
    contact_information: fake.email(),
    due_date: new Date(),
    submitted_date: new Date(),
    status: fake.word(),
    link_to_listing: fake.domain(),
    notes: fake.sentence(),
    draft_url: fake.domain()
  };
});
