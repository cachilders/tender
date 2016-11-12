'use strict';

const Schema = use('Schema');

class ProfilesTableSchema extends Schema {

  up () {
    this.create('profiles', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('twitter_id');
      table.string('bio');
      table.string('img');
      table.timestamps();
    });
  }

  down () {
    this.drop('profiles');
  }

}

module.exports = ProfilesTableSchema;
