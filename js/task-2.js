class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items
    }
    
    addItem(newItem) {
        return this.#items.push(newItem)
    }

    removeItem(itemToRemove) {
        const indexOfItemToRemove = this.#items.indexOf(itemToRemove);
        // Необходимо было сделать проверку, так как при удалении несуществующего элемента, удалялся последний элемент массива
        // можно было исключить индекс -1 с применением !==, но захотелось сделать так
        if (indexOfItemToRemove >= 0) {
                this.#items.splice(indexOfItemToRemove, 1);
            }
        return this.#items
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
