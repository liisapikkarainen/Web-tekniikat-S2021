// Harj. 1
let sanat = ["one", "two", "three", "four", "five"];

sanat.forEach(sana => console.log(sana) );

// Harj. 2
let prices = [24, 50, 100, 68];

let discount = prices.map(price => 0.2*price);
console.log(discount);

// Harj. 3
let names = ["John", "Jack", "Lisa", "John", "Sara"];
names = names.map(name => {
if(name === "John"){
        return "Matt";
    }
    return name;
} );
console.log(names);

let x = 10;
let y = -1;

x = y > 0 ? 5 : 10;

// Harj. 4
let numbers = [1, 4, -3, -5, 4, 23];

let positives = numbers.filter(number => number >= 0)
console.log(positives);

// Harj. 5
names = ["Timoteus Mikkonen", "Sara", "Lasse", "Taavi", "Tinderella"];
names = names.filter(name => name.length > 8 && name[0]==='T');
console.log(names);

// Harj. 6
if(names.every(sana => sana.length > 0)) {
        let pituudet = names.map(sana => sana.length);

        let summa = pituudet.reduce((previous, current) => previous + current);
        console.log(summa);
}

// 2. tapa

if(names.every(sana => sana.length > 0)) {

    let summa = names.reduce((x, y) => x + y.length, 0);
    console.log(summa);

}