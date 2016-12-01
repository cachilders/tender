'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments();
      table.string('email', 64).notNullable().unique();
      table.string('password', 64);
      table.boolean('locked').defaultTo(false);
      table.timestamps();
    });
  }

  down () {
    this.drop('users');
  }

}

module.exports = UsersTableSchema;
