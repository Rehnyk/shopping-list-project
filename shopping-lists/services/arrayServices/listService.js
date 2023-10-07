let lists = [
    { id: 1, name: 'cats', active: true },
    { id: 2, name: 'dogs', active: true },
    { id: 3, name: 'houses', active: true },
    { id: 4, name: 'vegetables', active: true },
    { id: 5, name: 'cars', active: true },
    { id: 6, name: 'books', active: false },
    { id: 7, name: 'mountains', active: true },
    { id: 8, name: 'songs', active: true }
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