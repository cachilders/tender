'use strict'

const Route = use('Route')


/*
|--------------------------------------------------------------------------
| API routes
|--------------------------------------------------------------------------
*/

// See 'Reourceful Routes' @ http://www.adonisjs.com/docs/3.1/routing
// These API routes were pre-vue and will need to be modified
Route.resources('users', 'UserController');
Route.resources('submissions', 'SubmissionController');

/*
|--------------------------------------------------------------------------
| Web routes
|--------------------------------------------------------------------------
*/

// Leaving this in place for the time to get a sense of mixing static and SPA
// Route.on('about').render('about');

// Pre-vue wildcard route
// Route.any('*', function * (request, response) {
//   yield response.sendView('home');
// });

Route.any('*', 'WebAppController.render')
