let basketString = "Apple, Banana, Grape, Mango, Orange";
console.log(basketString.split());

console.log(basketString.length);
console.log(basketString.toUpperCase());
console.log(basketString.toLowerCase());
console.log(basketString.replace("Banana", "Strawberry"));

if (basketString.startsWith("Apple") && basketString.endsWith("Orange")) {
    console.log("Starts with Apple and ends with Orange")
}

let basketArray = basketString.split(", ");
let splitBasketArray = "";
for (let i = 0; i < basketArray.length; i++) {
    if (i < basketArray.length - 1) {
        splitBasketArray += basketArray[i] + " | "
    } else {
        splitBasketArray += basketArray[i]
    }

};
console.log(splitBasketArray);

basketArray.push("Pineapple");
basketArray.pop();
basketArray.unshift("Watermelon");
basketArray.shift();
console.log(basketArray);


if (basketArray.includes("Grape")) {
  console.log("Grape is available");
} else {
  console.log("Grape is not available");
}

console.log(basketArray.indexOf("Mango"));

basketArray.length > 5 ? console.log("The basket is full") : console.log("The basket has space");

let usersFruit = prompt("Enter a fruit name:");

if (basketArray.includes(usersFruit)) {
    console.log(basketArray);
} else {
    basketArray.push(usersFruit);
    console.log(basketArray)
}

basketArray.reverse();
console.log(basketArray);

basketArray.reverse();
let repeatBasket = "";
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < basketArray.length; j++) {
        repeatBasket += basketArray[j];
        repeatBasket += ", ";
    }
}
repeatBasket = repeatBasket.slice(0, -2);
console.log(repeatBasket);