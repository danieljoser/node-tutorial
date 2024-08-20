type Pizza = {
  id: number,
  name: string,
  price: number
};

type Order = {
  id: number,
  pizza: Pizza,
  status: "ordered" | "completed"
};

let cashInRegister = 100;
const orderQueue: Order[] = [];
let newOrderId = 1;
let newPizzaId = 1;

const menu: Pizza[] = [
  {id: newPizzaId++, name: "Margherita", price: 3.99},
  {id: newPizzaId++, name: "Anchovy", price: 4.99},
  {id: newPizzaId++, name: "Four stations", price: 5.99},
  {id: newPizzaId++, name: "Nutella", price: 2.49}
];



function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  let newPizza: Pizza = {id: newPizzaId++, ...pizzaObj};
  menu.push(newPizza);
  return newPizza;
};

// console.log(menu.find((element) => element.name === "Margherita"));

function placeOrder(pizzaName: string): Order | undefined {
  const pizzaOrdered = menu.find(element => element.name === pizzaName);
  if (!pizzaOrdered) {
    console.error(`${pizzaName} is not on the menu`);
    return 
  }
  cashInRegister += (pizzaOrdered.price);
  cashInRegister = Number(cashInRegister.toFixed(2));
  const orderObject: Order = {id : newOrderId++, pizza: pizzaOrdered, status: "ordered"};
  orderQueue.push(orderObject);

  return orderObject
};

function completeOrder(orderedId: number): Order | undefined {
  const correctOrder = orderQueue.find(order => order.id === orderedId);
  if (!correctOrder){
    console.error(`The id order ${orderedId} has not been placed`);
    return 
  }
  correctOrder.status = "completed";

  return correctOrder;
};

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof(identifier) === "string") {
    let pizzaInfo = menu.find(pizzaName => pizzaName.name.toLowerCase() === identifier.toLowerCase());
    return pizzaInfo;
  } else if (typeof(identifier) === "number") {
    let pizzaInfo = menu.find(pizzaId => pizzaId.id === identifier);
    return pizzaInfo;
  } else{
    throw new TypeError("Parameter 'identifier' must be a string or a number");
  }
   
}


addNewPizza({name: "Veggie", price: 8.99});
addNewPizza({name: "Chicken", price: 5.99});
addNewPizza({name: "Bacon cheese", price: 6.49});

placeOrder("Bacon cheese");
placeOrder("Veggie");
placeOrder("Four stations");

completeOrder(1);
completeOrder(2);
completeOrder(3);

console.log("Menu:", menu);
/* console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue); */