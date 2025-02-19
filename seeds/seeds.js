/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
import usersData from "../seed-data/seed-data.js";
export async function seed(knex) {
  await knex("userdata").del();
  await knex("userdata").insert(usersData);
}
