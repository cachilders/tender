'use strict'

const Route = use('Route')


/*
|--------------------------------------------------------------------------
| API routes
|--------------------------------------------------------------------------
*/

// See 'Reourceful Routes' @ http://www.adonisjs.com/docs/3.1/routing

Route.resource('users', 'UserController');
Route.resource('submissions', 'SubmissionController');

/*
|--------------------------------------------------------------------------
| Web routes
|--------------------------------------------------------------------------
*/


Route.on('about').render('about');
Route.any('*', function * (request, response) {
  yield response.sendView('home');
});
