// 1 - variáveis
let nome = "Matheus";

console.log(nome);

nome = "Matheus Bastiste"

console.log(nome);

const idade = 31;

console.log(idade);

// const idade = 32; // ERRO
// console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

//2 - mais sobre variáveis

let a = 10; b = 20; c = 30;

console.log(a, b, c);

let _teste = "ok"; // pode começar com _ ou $
let $teste = "ok"; // pode começar com _ ou $
// let 1teste = "ok"; // não pode começar com números
let teste1 = "ok"; // pode terminar com números

console.log(_teste, $teste, teste1);

// 3 - prompt
// obtem um dado do usuário, mas não é muito utilizado
//pois não pode ser estilizado

// const age = prompt("Digite a sua idade.");
// console.log(`Você tem ${age} anos.`);

//4 - alert
// mostra uma mensagem para o usuário

// alert("testando");

// const z = 10;

// alert(`O valor de z é ${z}`);

// 5  max

console.log(Math.max(5, 2, 1, 10)); // retorna o maior número
console.log(Math.min(5, 2, 1, 10)); // retorna o menor número

console.log(Math.floor(5.14)); // arredonda para baixo
console.log(Math.ceil(5.14)); // arredonda para cima
console.log(Math.round(5.5)); // arredonda para o mais próximo

//6 - console

console.log("Olá mundo!"); // mensagem normal
console.error("Mensagem de erro!"); // mensagem de erro
console.warn("Mensagem de aviso!"); // mensagem de aviso
console.info("Mensagem de informação!"); // mensagem de informação


//14 - forçando a saída de um loop com break

for(let g = 20; g > 10; g--){
    console.log(`O valor de g é ${g}`);
    if(g===12){
        console.log("O g é 12!");
        break;
    }
}

//15 - pulando uma iteração com continue

for(let s = 0; s<10; s++){
    if(s % 2 === 0){
        console.log("Número par!");
        continue;
    }

    console.log(s)
}