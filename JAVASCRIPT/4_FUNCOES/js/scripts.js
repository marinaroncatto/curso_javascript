// 1 - criando uma função

function minhaFuncao() {
    console.log("testando");
}

//chamando a função
minhaFuncao();

//tecnica para impedir sobrescrever uma função
const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`imprimindo: ${txt}`);
}

funcaoComParametro("Olá, tudo bem?");
funcaoComParametro("Outro texto");

// 2 - return

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);

console.log(soma(c, d));

const minhaFuncaoEmVariavel2 = function (n1, n2) {
    return n1 * n2;
}

console.log(minhaFuncaoEmVariavel2(5, 5));
console.log(minhaFuncaoEmVariavel2(a, b));

// 3 - escopo da função

let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função: ${y}`);
}

testandoEscopo();

console.log(`Y fora da função: ${y}`);

testandoEscopo();


// 4 - escopo aninhado

let m = 10;

function escopoAninhado() {
    let m = 20;

    if (true) {
        let m = 30

            if(true){
                let m = 40
                console.log(m)
            }

        console.log(m)
    }
    console.log(m)
}

escopoAninhado();
console.log(m);

// 5 - arrow function
//é uma funçao anonima

const testeArrow = () => {
    console.log("Esta é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log("Par")
        return;
    }

    console.log("Impar")
};

parOuImpar(5);

parOuImpar(10);

// 6 arrow funcions contraídas

const raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));

console.log(raizQuadrada2(12));

const helloWorld = () => console.log("Hello World");

helloWorld();

console.log(helloWorld()); //undefined pois o console.log já foi exibido e o segundo fica sem argumento