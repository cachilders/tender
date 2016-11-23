'use strict';

const Route = use('Route');

/*
|--------------------------------------------------------------------------
| Authentication routes
|--------------------------------------------------------------------------
*/

Route.get('/login', 'GAuthController.redirect');
Route.get('/logout', 'GAuthController.revoke');
Route.get('/g-auth/result', 'GAuthController.handleCallback');

/*
|--------------------------------------------------------------------------
| API routes
|--------------------------------------------------------------------------
*/

// See 'Reourceful Routes' @ http://www.adonisjs.com/docs/3.1/routing
// These API routes were pre-vue and will need to be modified
Route.resources('users', 'UserController')
  .only('show', 'update');
  // .middleware('auth');
Route.resources('submissions', 'SubmissionController');
  // .middleware('auth');

/*
|--------------------------------------------------------------------------
| Web routes
|--------------------------------------------------------------------------
*/

Route.any('*', 'WebAppController.render');
