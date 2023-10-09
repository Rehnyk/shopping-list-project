let items = [
    { id: 1, referenceId: 2, name: 'tomatoes', collected: false },
    { id: 2, referenceId: 1, name: 'bananas', collected: false },
    { id: 3, referenceId: 3, name: 'milk', collected: false },
    { id: 4, referenceId: 5, name: 'table', collected: false },
    { id: 5, referenceId: 2, name: 'onions', collected: false },
    { id: 6, referenceId: 1, name: 'apples', collected: false },
    { id: 7, referenceId: 5, name: 'bed', collected: false },
    { id: 8, referenceId: 6, name: 'Audi', collected: false },
    { id: 9, referenceId: 5, name: 't-shirt', collected: false },
    { id: 10, referenceId: 2, name: 'cucumbers', collected: false },
    { id: 11, referenceId: 4, name: 't-shirt', collected: false },
    { id: 12, referenceId: 1, name: 'lemons', collected: false },
    { id: 13, referenceId: 3, name: 'bread', collected: false },
    { id: 14, referenceId: 4, name: 'trousers', collected: false },
    { id: 15, referenceId: 4, name: 'jacket', collected: false },
    { id: 16, referenceId: 1, name: 'oranges', collected: false },
    { id: 17, referenceId: 2, name: 'peppers', collected: false },
    { id: 18, referenceId: 3, name: 'yogurt', collected: false },
    { id: 19, referenceId: 5, name: 'chair', collected: false },
    { id: 20, referenceId: 1, name: 'grapes', collected: false },
    { id: 21, referenceId: 3, name: 'cheese', collected: false },
    { id: 22, referenceId: 4, name: 'gloves', collected: false },
    { id: 23, referenceId: 6, name: 'BMW', collected: false },
    { id: 24, referenceId: 2, name: 'pears', collected: false },
    { id: 25, referenceId: 4, name: 'socks', collected: false }
]

const createItem = async (name, listId) => {
    const newId = items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;
    items.push({id: newId, referenceId: parseInt(listId), name, collected: false});
};

const collectItem = async (id) => {
    const itemToCollect = items.find(item => item.id === parseInt(id));
    itemToCollect.collected = true;
};

const findAllListItems =  async (listId) => items.filter(item => item.referenceId === parseInt(listId));

const findNoncollected =  async (listId) => items.filter(item => item.referenceId === parseInt(listId) && item.collected === false);
const findCollected =  async (listId) => items.filter(item => item.referenceId === parseInt(listId) && item.collected === true);

const countItems = async () => items.length;


export { createItem, collectItem, findAllListItems, findNoncollected, findCollected, countItems };