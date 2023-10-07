import {serve, configure} from "./deps.js";
import * as listController from "./controllers/listController.js";
import * as itemController from "./controllers/itemController.js";

configure({
    views: `${Deno.cwd()}/views/`,
});
const checkListId = async (id) => id >= 1 && id <= await listController.countLists();
const handleRequest = async (request) => {
    const url = new URL(request.url);
    const splitUrl = url.pathname.split('/').filter(x => x !== '');
    let listId;

    if (splitUrl.length > 1) {
        listId = parseInt(splitUrl[1]);
        if (!(await checkListId(listId))) {
            return new Response("Invalid list ID.", { status: 404 });
        }
    }

    /***************  GET http request  **************************/
    if (request.method === "GET") {

        // Main page
        if (url.pathname === "/") {
            return await listController.showStatistics();

            // Show all lists (/lists)
        } else if (/^\/lists$/.test(url.pathname)) {
            return await listController.viewAllLists();

            // Show a list (/lists/{id})
        } else if (/^\/lists\/\d+$/.test(url.pathname)) {
            return await listController.viewOneList(listId)

        } else {
            return new Response("Invalid URL.", {status: 404});
        }

        /***************  POST http request  **************************/
    } else if (request.method === "POST") {

        // Create new list (/lists)
        if (/^\/lists$/.test(url.pathname)) {
            return await listController.createList(request);

            // Deactivate list (/lists/{id}/deactivate)
        } else if (/^\/lists\/\d+\/deactivate$/.test(url.pathname)) {
              return await listController.deactivateList(listId);

            // Add new item (/lists/{id}/items)
        } else if (/^\/lists\/\d+\/items$/.test(url.pathname)) {
            return await itemController.createItem(request, listId);

            // Collect item (/lists/{id}/items/{itemId}/collect)
        } else if (/^\/lists\/\d+\/items\/\d+\/collect$/.test(url.pathname)) {
            return await itemController.collectItem(listId, splitUrl[3]);

        } else {
            return new Response("Invalid URL.", {status: 404});
        }

    } else {
        return new Response("Invalid request method. Use only GET or POST.");
    }
}

serve(handleRequest, {port: 7777});


