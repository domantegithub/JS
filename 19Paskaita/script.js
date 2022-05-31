// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//       this.name = name;
//       this.created = Date.now();
//     }
//   }

//   let rabbit = new Rabbit("White Rabbit");
//   console.log(rabbit);

//UZDUOTYS su ROKU - Susikuriam klase
class Item {
    constructor (name, price, count) {
        this.name=name;
        this.price=price;
        this.count = count;
    }
//susikuriam metoda, kuris sumes viska i lista. Todel class item reikia susikurti metoda ovz. AddtoList
    addToList = () => {
        const list = document.getElementById("list"); //issitraukiam lista
        const newItem = document.createElement("li"); //sukuriam nauja elementa
        newItem.textContent = `${this.name} x ${this.count} = $${this.count * this.price}`;
        list.append(newItem);
    };
}

const submitItemForm = (event) => {
    event.preventDefault();
    const itemName = document.querySelector("input[name='item']");
    const price = document.querySelector("input[name='price']");
    const count = document.querySelector("input[name='count']");

    const item = new Item(itemName.value, Number(price.value), Number(count.value));
    item.addToList();
    };
    
const itemForm = document.getElementById("form-item"); 
itemForm.addEventListener("submit", submitItemForm);

