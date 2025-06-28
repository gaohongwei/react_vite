const _ = require("lodash");
class MenuStream {
  constructor() {
    this.stream = [
      "4",
      "ENTREE",
      "Spaghetti",
      "10.95",
      "2",
      "3",
      "",
      "1",
      "CATEGORY",
      "Pasta",
      "4",
      "5",
      "",
      "2",
      "OPTION",
      "Meatballs",
      "1.00",
      "",
      "3",
      "OPTION",
      "Chicken",
      "2.00",
      "",
      "5",
      "ENTREE",
      "Lasagna",
      "12.00",
      "",
      "6",
      "ENTREE",
      "Caesar Salad",
      "9.75",
      "3",
      "",
    ];
  }

  nextLine() {
    if (this.stream.length === 0) {
      return null;
    }

    return this.stream.shift();
  }
}

class Menu {
  constructor(m) {
    this.m = m;
  }

  items() {
    let curentItem = {};
    this.items = [];
    while (true) {
      const line = this.m.nextLine();
      if (line === null) break;
      if (line === "") {
        if (curentItem) this.items.push(curentItem);
        curentItem = {};
      }
      if (!curentItem["ID"]) {
        curentItem["ID"] = line;
        continue;
      }
      if (!curentItem["Category"]) {
        curentItem["Category"] = line;
        continue;
      }
      if (!curentItem["Name"]) {
        curentItem["Name"] = line;
        continue;
      }
      if (curentItem["Category"] === "CATEGORY") {
        if (!curentItem["Links"]) {
          curentItem["Links"] = [];
        }
        curentItem["Links"].push(line);
      } else {
        if (!curentItem["Price"]) {
          curentItem["Price"] = line;
        } else {
          if (!curentItem["Links"]) {
            curentItem["Links"] = [];
          }
          curentItem["Links"].push(line);
        }
      }
    }

    return this.items;
  }
}

const ms = new MenuStream();

const m = new Menu(ms);
const items = m.items();
console.log(items);

// styled-components
