import {redirectTo} from "../utils/requestUtils.js";
import * as itemService from "../services/itemService.js";

const createItem = async (request, listId) => {
    const formData = await request.formData();
    const name = formData.get("name");

    await itemService.createItem(name, listId);
    return redirectTo(`/lists/${listId}`);
};

const collectItem = async (listId, itemId) => {
    await itemService.collectItem(itemId);
    return redirectTo(`/lists/${listId}`);
};



export { createItem, collectItem };
