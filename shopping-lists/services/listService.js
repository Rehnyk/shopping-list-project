import * as arrayListSvc from "./arrayServices/listService.js";
import * as dbListSvc from "./dbServices/listService.js";


/**** Switch between database or array based service ***/
// const implementor = arrayListSvc;
const implementor = dbListSvc;

const createList = (...args) => implementor.createList(...args);
const deactivateList = async (id) => implementor.deactivateList(id);
const findAllActiveLists = (...args) => implementor.findAllActiveLists(...args);
const findAllDeactivatedLists = (...args) => implementor.findAllDeactivatedLists(...args);
const findListById = async (id) => implementor.findListById(id);
const countLists = async () => implementor.countLists();


export {createList, deactivateList, findAllActiveLists, findAllDeactivatedLists, findListById, countLists };