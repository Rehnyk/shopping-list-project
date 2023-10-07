import * as arrayItemSvc from "./arrayServices/itemService.js";
import * as dbItemSvc from "./dbServices/itemService.js";


/**** Switch between database or array based service ***/
//const implementor = arrayItemSvc;
 const implementor = dbItemSvc;

const createItem = (...args) => implementor.createItem(...args);

const collectItem = async (id) => implementor.collectItem(id);
const findListItems = (listId) => implementor.findListItems(listId);
const findNoncollected = (listId) => implementor.findNoncollected(listId);
const findCollected = (listId) => implementor.findCollected(listId);
const countItems = async () => implementor.countItems();

export { createItem, collectItem, findListItems, findNoncollected, findCollected, countItems };