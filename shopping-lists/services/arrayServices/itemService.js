let items = [
    { id: 1, referenceId: 2, name: 'elephant', collected: false },
    { id: 2, referenceId: 7, name: 'paradise', collected: false },
    { id: 3, referenceId: 3, name: 'book', collected: false },
    { id: 4, referenceId: 5, name: 'tiger', collected: false },
    { id: 5, referenceId: 2, name: 'banana', collected: false },
    { id: 6, referenceId: 1, name: 'umbrella', collected: false },
    { id: 7, referenceId: 8, name: 'chocolate', collected: false },
    { id: 8, referenceId: 6, name: 'xylophone', collected: false },
    { id: 9, referenceId: 5, name: 't-shirt', collected: false },
    { id: 10, referenceId: 2, name: 'jazz', collected: false },
    { id: 11, referenceId: 4, name: 'zeppelin', collected: false },
    { id: 12, referenceId: 7, name: 'lemon', collected: false },
    { id: 13, referenceId: 3, name: 'giraffe', collected: false },
    { id: 14, referenceId: 4, name: 'ocean', collected: false },
    { id: 15, referenceId: 6, name: 'window', collected: false },
    { id: 16, referenceId: 1, name: 'dolphin', collected: false },
    { id: 17, referenceId: 8, name: 'door', collected: false },
    { id: 18, referenceId: 3, name: 'notebook', collected: false },
    { id: 19, referenceId: 5, name: 'tv', collected: false },
    { id: 20, referenceId: 1, name: 'cat', collected: false },
    { id: 21, referenceId: 3, name: 'kangaroo', collected: false },
    { id: 22, referenceId: 7, name: 'sunflower', collected: false },
    { id: 23, referenceId: 6, name: 'apple', collected: false },
    { id: 24, referenceId: 2, name: 'tomato', collected: false },
    { id: 25, referenceId: 4, name: 'pear', collected: false }
]

const createItem = async (name, listId) => {
    console.log("create item")
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