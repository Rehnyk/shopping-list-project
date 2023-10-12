import {serve, configure} from "./deps.js";
import * as listController from "./controllers/listController.js";
import * as itemController from "./controllers/itemController.js";

configure({
    views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
    const url = new URL(request.url);
    const splitUrl = url.pathname.split('/').filter(x => x !== '');

    if (url.pathname === "/" && request.method === "GET") {
        return await listController.showStatistics();
    } else if (url.pathname === "/lists" && request.method === "POST") {
        return await listController.createList(request);
    } else if (url.pathname === "/lists" && request.method === "GET") {
        return await listController.viewAllLists();
    } else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
        return await listController.viewOneList(splitUrl[1]);
    } else if (url.pathname.match("lists/[0-9]+/deactivate") && request.method === "POST") {
        return await listController.deactivateList(splitUrl[1]);
    } else if (url.pathname.match("lists/[0-9]+/items/[0-9]+/collect") && request.method === "POST") {
        return await itemController.collectItem(splitUrl[1], splitUrl[3]);
    } else if (url.pathname.match("lists/[0-9]+/items") && request.method === "POST") {
        return await itemController.createItem(request, splitUrl[1]);
    } else {
        return new Response("Not found", { status: 404 });
    }
};

serve(handleRequest, {port: 7777});


