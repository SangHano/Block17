//Connect two java script files

const coffeeMenu = require(`./coffee_data.js`)
console.table(coffeeMenu);

// Create a variable and use the . map to get all the names of the drinks
const nameDrinks = coffeeMenu.map((item) => {
    return item.name;
})
console.log(nameDrinks)


//Print an array of drinks that cost 5 and under.
const underFive =coffeeMenu.filter((item) => {
    return item.price <= 5

})
console.table(underFive);

//Print an array of drinks that are priced at an even number.
const evenPrice = coffeeMenu.filter((item) =>{
    return item.price % 2 === 0 ;

})
console.table(evenPrice);

//Create a separated array with just prices 
const array1 = (item) =>{
    return item.price;
}
const priceOfArray = coffeeMenu.map(array1);
console.log(priceOfArray);

//Print the total if you were to order one of every drink.
const sumOfPrice = priceOfArray.reduce((total, price) =>{
    return total + price
})
console.log(sumOfPrice);

//Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter((item)=>{
    return item.seasonal === true
})
console.table(seasonalDrinks)


//Print all the seasonal drinks with the words "with imported beans" after the item name.

console.log(seasonalDrinks[1].name + ` with imported beans`)
console.log(seasonalDrinks[0].name + ` with imported beans`)


