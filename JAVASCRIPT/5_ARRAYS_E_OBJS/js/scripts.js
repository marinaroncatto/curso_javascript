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

// 6 - criando e deletando propriedades

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos

//objetos literais são instancias da classe Object em JS
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object); //true


//podemos alterar propridades de objetos const, só não seu tipo
const obj2 ={
    c: [],
};

//para copiar os dados de um obj para outro usamos o método assign

Object.assign(obj2, obj);
//primeiro o obj que receberá os dados da cópia, depois o que contem os dados
//o obj original não é alterado
console.log(obj2);

// 8 - conhecendo melhor os objetos

//para saber as propriedades de um obj, usamos o método keys
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

//para saber chave e valor dos objs, usamos entries
console.log(Object.entries(car));

// 9 - mutação

const a = {
    name: "Matheus",
};

const b = a; // nova referência != de novo obj
//o que acontece com b afeta a e vise versa

console.log(a);
console.log(b);

console.log(a === b); //true

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loop em array

const users = ["Matheus", "João", "Pedro", "Miguel"];

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
};

// 11 - push e pop - manipulam final da lista

const array = ["a", "b", "c"];

array.push("d"); //adiciona ao final da lista

console.log(array);

console.log(array.length);

array.pop(); // retira o último elemento e retorna ele

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y"); // é possível adicionar vários de uma vez

console.log(array);

// 12 - shift e unshift - manipulam início da lista

const letters = ["a", "b", "c"];

const letter = letters.shift(); //retira o elemento e retorna ele

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r"); // adiciona os elementos no início

letters.unshift("z");

console.log(letters);


//  13 - Indexof e lastIndexOf

const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã")); //retorna o índice do primeiro elemento correspondente
console.log(myElements.indexOf("Abacate"));

//mesma saída
console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate")); //último índice contendo este elemento (4)

console.log(myElements.indexOf("Mamão")); // quando não encontra retorna -1

console.log(myElements.lastIndexOf("Mamão")); // -1