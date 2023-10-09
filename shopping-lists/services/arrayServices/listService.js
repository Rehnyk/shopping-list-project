let lists = [
    { id: 1, name: 'Fruits', active: true },
    { id: 2, name: 'Vegetables', active: true },
    { id: 3, name: 'Groceries', active: true },
    { id: 4, name: 'Clothes', active: true },
    { id: 5, name: 'Furniture', active: true },
    { id: 6, name: 'Cars', active: true },
];


const createList = async (name) => {
    const newId = lists.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
    lists.push({id: newId, name, active:true});
};

const deactivateList = async (id) => {
    const listToDeactivate = lists.find(item => item.id === parseInt(id));
    listToDeactivate.active = false;
};

const findAllActiveLists = async () => lists.filter(item => item.active === true);
const findAllDeactivatedLists = async () => lists.filter(item => item.active === false);
const findListById = async (id) => lists.find(item => item.id === parseInt(id));

const countLists = async () => lists.length;

export { createList, deactivateList, findAllActiveLists, findAllDeactivatedLists, findListById, countLists };