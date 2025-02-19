export function up(knex) {
  return knex.schema.createTable("userdata", (table) => {
    table.increments("id").primary();
    table.string("user_id").notNullable();
    table.string("username").notNullable();
    table.string("password").notNullable();
    table.json("todolist", 5000).notNullable();
    table.string("notes", 5000).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

export function down(knex) {
  return knex.schema.dropTable("userdata");
}
