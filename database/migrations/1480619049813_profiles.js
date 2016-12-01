const Schema = use('Schema');

class ProfilesTableSchema extends Schema {

  up () {
    this.create('profiles', (table) => {
      table.increments();
      table.string('user_id', 64).unsigned().references('email').inTable('users');
      table.string('username', 128).notNullable();
      table.string('twitter_id', 64);
      table.string('bio', 512);
      table.string('img', 256);
      table.timestamps();
    });
  }

  down () {
    this.drop('profiles');
  }

}

module.exports = ProfilesTableSchema;
