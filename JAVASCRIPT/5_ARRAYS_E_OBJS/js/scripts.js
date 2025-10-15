// 1 - Arrays

const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

//arrays são considerados objetos em js

const itens = ["Matheus", true, 2, 4.12, []];

console.log(itens);

//2 - acessando arrays

const arr = ["a", "b", "c", "d", "d"];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[83]);


// 3 - propriedades

const numbers = [5, 3, 4];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length);

// 4 - métodos

const otherNumbers = [1, 2, 3];

//unir listas
const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

console.log(text.indexOf("t"));

// 5 - objetos (Objects literals)

const person = {
    name: "Matheus",
    age: 31,
    job: "Programador"
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);
