import { renderFile } from "../deps.js";
import {redirectTo, responseDetails} from "../utils/requestUtils.js";
import * as itemService from "../services/itemService.js";
import * as listService from "../services/listService.js";


const createList = async (request) => {
    const formData = await request.formData();
    const name = formData.get("name");

    await listService.createList(name);
    return redirectTo("/lists");
};

const deactivateList = async (id) => {
    await listService.deactivateList(id);
    return redirectTo("/lists");
};

const viewAllLists = async () => {
    const data = {
        activeLists: await listService.findAllActiveLists(),
    };

    return new Response(await renderFile("list-all.eta", data), responseDetails);
};

const viewOneList = async (id) => {
    const data = {
        list: await listService.findListById(id),
        noncollected: await itemService.findNoncollected(id),
        collected: await itemService.findCollected(id)
    };
    return new Response(await renderFile("list.eta", data), responseDetails);
};

const showStatistics= async () => {
    const data = {
        lists: await listService.countLists(),
        items: await itemService.countItems()
    };

    return new Response(await renderFile("index.eta", data), responseDetails);
};

const countLists = async () => await listService.countLists();



export { createList, deactivateList, viewAllLists, viewOneList, showStatistics, countLists };