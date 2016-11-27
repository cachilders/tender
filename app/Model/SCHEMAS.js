this.create('submissions', (table) => {
  table.increments();
  table.string('user_id', 80).unsigned().references('email').inTable('users');
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

this.create('profiles', (table) => {
  table.increments();
  table.string('user_id', 80).unsigned().references('email').inTable('users');
  table.string('username', 80).notNullable();
  table.string('twitter_id');
  table.string('bio');
  table.string('img');
  table.timestamps();
});

this.create('users', table => {
  table.increments();
  table.string('email', 254).notNullable().unique();
  table.timestamps();
});

this.create('tokens', table => {
  table.increments();
  table.string('user_id', 80).unsigned().references('email').inTable('users');
  table.string('token', 40).notNullable().unique();
  table.boolean('forever').defaultTo(false);
  table.boolean('is_revoked').defaultTo(false);
  table.timestamp('expiry');
  table.timestamps();
});
