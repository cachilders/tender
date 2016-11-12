'use strict';

const Schema = use('Schema');

class UsersTableSchema extends Schema {

  up () {
    this.create('users', table => {
      table.increments();
      table.string('username', 80).notNullable();
      // table.string('password', 60).notNullable();
      table.string('email', 254).notNullable().unique();
      table.string('avatar', 254).notNullable().unique();
      table.timestamps();
    });
  }

  down () {
    this.drop('users');
  }

}

module.exports = UsersTableSchema;
