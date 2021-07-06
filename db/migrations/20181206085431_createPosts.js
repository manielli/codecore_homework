
exports.up = function(knex, Promise) {

    return knex.schema.createTable("cohorts", table => {
        table.increments("id");
        table.string("name");
        table.string("members");
        table.string("logo_url");

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("cohorts");
};
