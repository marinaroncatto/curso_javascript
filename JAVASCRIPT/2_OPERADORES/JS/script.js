// 1 - Number

console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -128);
console.log(typeof 2);

// 2 - Operações aritméticas

console.log(2 + 4);
console.log(10 - 5);
console.log(10 / 5);
console.log(2 * 4);
console.log(2 +  4 * 2);

// 3 - Special Numbers

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof infinity); // case sensitive
console.log(121 * "asd");
console.log(typeof NaN);

// 4 - Strings 

console.log("Um texto");
console.log('Mais um texto');
console.log('13');

console.log(typeof "Um texto");
console.log(typeof '13');

//  5 - Caracteres especiais

console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");

// 6 - Concatenação

console.log("oi, "+"tudo"+ " bem?");
console.log(`Testando `+`com `+ `a crase`);

// 7 - Interpolação (Template Strings)
//funciona apenas usando crase
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - booleans

console.log(typeof true);
console.log(5 > 20);
console.log(30 > 10);

// 9 - comparações

console.log(5 <= 5);
console.log(5 > 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - comparação de idêntico
// comparadores identicos verificam também o tipo de dado

console.log(9 == '9');
console.log(9 + '9');

console.log(9 === '9');
console.log(9 != "9");
console.log(9 !== '9');

// 11 - Operadores Lógicos

console.log(true && true);
console.log(true && false);

console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "matheus" === 1);

console.log(5 > 2 || "matheus" === 1);
console.log(5 < 2 || "matheus" === 1);

console.log(!5 > 2);

// 12 - Empty Values
//undefined e null

console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13 - conversão de tipo automática

console.log(5 * null);
console.log("teste"*"opa");
console.log('10'+1); // entendido como concatenação
console.log('10'-1);

