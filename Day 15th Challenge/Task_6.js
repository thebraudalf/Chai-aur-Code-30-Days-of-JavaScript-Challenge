// Module Pattern

// Using closure to create a simple module for managing collection of items
function itemModule() {
    let item = ["Sentro", "Raider", "Mercedes", "BMW"];

    return {

        addItem: function (newItem) {
            return item.push(newItem);
        },

        removeItem: function (removeItem) {
            const spliceItem = item.indexOf(removeItem);
            return item.splice(spliceItem, 1);

        },

        listItem: function () {
            return item.slice();
        }

    };

}

const ItemModule = itemModule();

ItemModule.addItem("CyberTruck");
ItemModule.removeItem("Truck");

console.log(ItemModule.listItem());
