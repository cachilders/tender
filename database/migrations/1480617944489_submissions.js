const Schema = use('Schema');

class SubmissionsTableSchema extends Schema {

  up () {
    this.create('submissions', (table) => {
      table.increments();
      table.string('user_id', 64).unsigned().references('email').inTable('users');
      table.string('submitted_to', 64);
      table.string('submission_method', 64);
      table.string('contact_information', 64);
      table.string('due_date', 64);
      table.string('submitted_date', 64);
      table.string('status', 32);
      table.string('link_to_listing', 256);
      table.string('notes', 512);
      table.string('draft_url', 256);
      table.timestamps();
    });
  }

  down () {
    this.drop('submissions');
  }

}

module.exports = SubmissionsTableSchema;
