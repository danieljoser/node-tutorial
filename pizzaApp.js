var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var cashInRegister = 100;
var orderQueue = [];
var newOrderId = 1;
var newPizzaId = 1;
var menu = [
    { id: newPizzaId++, name: "Margherita", price: 3.99 },
    { id: newPizzaId++, name: "Anchovy", price: 4.99 },
    { id: newPizzaId++, name: "Four stations", price: 5.99 },
    { id: newPizzaId++, name: "Nutella", price: 2.49 }
];
function addNewPizza(pizzaObj) {
    var newPizza = __assign({ id: newPizzaId++ }, pizzaObj);
    menu.push(newPizza);
    return newPizza;
}
;
// console.log(menu.find((element) => element.name === "Margherita"));
function placeOrder(pizzaName) {
    var pizzaOrdered = menu.find(function (element) { return element.name === pizzaName; });
    if (!pizzaOrdered) {
        console.error("".concat(pizzaName, " is not on the menu"));
        return;
    }
    cashInRegister += (pizzaOrdered.price);
    cashInRegister = Number(cashInRegister.toFixed(2));
    var orderObject = { id: newOrderId++, pizza: pizzaOrdered, status: "ordered" };
    orderQueue.push(orderObject);
    return orderObject;
}
;
function completeOrder(orderedId) {
    var correctOrder = orderQueue.find(function (order) { return order.id === orderedId; });
    if (!correctOrder) {
        console.error("The id order ".concat(orderedId, " has not been placed"));
        return;
    }
    correctOrder.status = "completed";
    return correctOrder;
}
;
function getPizzaDetail(identifier) {
    if (typeof (identifier) === "string") {
        var pizzaInfo = menu.find(function (pizzaName) { return pizzaName.name.toLowerCase() === identifier.toLowerCase(); });
        return pizzaInfo;
    }
    else if (typeof (identifier) === "number") {
        var pizzaInfo = menu.find(function (pizzaId) { return pizzaId.id === identifier; });
        return pizzaInfo;
    }
    else {
        throw new TypeError("Parameter 'identifier' must be a string or a number");
    }
}
addNewPizza({ name: "Veggie", price: 8.99 });
addNewPizza({ name: "Chicken", price: 5.99 });
addNewPizza({ name: "Bacon cheese", price: 6.49 });
placeOrder("Bacon cheese");
placeOrder("Veggie");
placeOrder("Four stations");
completeOrder(1);
completeOrder(2);
completeOrder(3);
console.log("Menu:", menu);
/* console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue); */ 
