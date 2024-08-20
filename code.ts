import { get } from "http";

const gameScores = [12,52,32,31,45];
const favoriteThings = ["learning stuff", "Helping others", "Be active"];
const voters = [{name:"John", age:32}, {name:"Victor", age:39}];

function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1];
};

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));