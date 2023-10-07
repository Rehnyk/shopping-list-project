import { sql } from "../../database/database.js";

const createItem = async (name, listId) => {
    await sql`INSERT INTO shopping_list_items (name, shopping_list_id) VALUES (${ name }, ${ listId })`;
};

const collectItem = async (id) => {
    await sql`UPDATE shopping_list_items SET collected = true WHERE id = ${ id }`;
}
const findAllListItems = async (listId) => {
    return await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${listId}`;
};

const findNoncollected =  async (listId) => {
    return await sql`SELECT * FROM shopping_list_items 
         WHERE shopping_list_id = ${listId} AND collected = false 
         ORDER BY name`;
};

const findCollected =  async (listId) => {
    return await sql`SELECT * FROM shopping_list_items 
         WHERE shopping_list_id = ${listId} AND collected = true 
         ORDER BY name`;
};


const countItems = async () => {
    const rows = await sql`SELECT COUNT (*) AS count FROM shopping_list_items`;
    return rows[0].count;
};

export { createItem, collectItem, findAllListItems, findNoncollected, findCollected, countItems };

