class User {
  constructor(name) {
    this.name = name
  }
}

new User('bob');

class  Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
new Item('red socks', 40);

let store = {items: [{id: 1, price: 2, name: 'red socks', userId: 1},{id: 2, price: 7, name: 'blue shirt', userId: 1}, {id: 3, price: 4, name: 'black tshirt', userId: 2}],
users: [{id: 1, name: 'Cindy'}, {id: 2, name: 'Billy'}, {id: 3, name: 'Bobbly'}]}