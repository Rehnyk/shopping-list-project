import { sql } from "../../database/database.js";

const createList = async (name) => {
    await sql`INSERT INTO shopping_lists (name) VALUES (${ name })`;
};

const deactivateList = async (id) => {
    await sql`UPDATE shopping_lists SET active = false WHERE id = ${ id }`;
}

const findAllActiveLists = async () => {
    return await sql`SELECT * FROM shopping_lists WHERE active = true`;
};

const findAllDeactivatedLists = async () => {
    return await sql`SELECT * FROM shopping_lists WHERE active = false`;
};

const findListById = async (id) => {

    const rows = await sql`SELECT * FROM shopping_lists WHERE id = ${ id }`;

    if (rows && rows.length > 0) {
        return rows[0];
    }

    return false;
}

const countLists = async () => {
    const rows = await sql`SELECT COUNT (*) AS count FROM shopping_lists`;
    return rows[0].count;
};


export { createList, deactivateList, findAllActiveLists, findAllDeactivatedLists, findListById, countLists };
