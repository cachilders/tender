'use strict';

const Schema = use('Schema');

class SubmissionsTableSchema extends Schema {

  up () {
    this.create('submissions', (table) => {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.string('submitted_to');
      table.string('submission_method');
      table.string('contact_information');
      table.date('due_date');
      table.date('submitted_date');
      table.string('status');
      table.string('link_to_listing');
      table.string('notes');
      table.string('draft_url');
      table.timestamps();
    });
  }

  down () {
    this.drop('submissions');
  }

}

module.exports = SubmissionsTableSchema;
