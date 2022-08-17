// 1 -uma pessoa que se chama João -- JSON

// let pessoa = {
//     nome: "João",
//     idade: 17
// }

// //console.log(pessoa)
// console.log("Meu nome é: " + pessoa.nome)
// console.log("Tenho " + pessoa["idade"] + " anos")


// 3 - Uma concessionária tem CNPJ e endereço. Ela possui uma carro em estoque
// Ele tem marca, modelo e ano de fabricação.
let vrum = {
    CNPJ :'62.545.568/0001-27',
    endereco:{
        rua: "Rua carro do bom",
        numeroRua: 1586,
        bairro: "Meu Carro Minha Vida"
    },
    carros : [
        {
            marca: 'BMW',
            modelo: 'X1',
            anoFabri: 2022
        },
        {
            marca: 'Fiat',
            modelo: 'Uno',
            anoFabri: 1997
        },
        {
            marca: 'Jeep',
            modelo: 'Compass',
            anoFabri: 2020
        }
    ]
}

// 2 -  Uma pessoa que se chama Maria, tem 21 anos e mora na rua B, numero 121

// let serumanu = {
//     nome: "Maria",
//     idade: 21,
//     endereco :{
//         logradouro: "Rua B",
//         numeroRua: 121
//     }
// }
// const nome = serumanu.nome
// const idade = serumanu.idade
// const endereco = serumanu.endereco.logradouro
// const numero =serumanu.endereco.numeroRua

// console.log(`Olá, me chamo ${nome} , tenho ${idade} anos e 
// moro na ${endereco}, ${numero}. Me mudei a pouco tempo :) `)

// console.log(
//   `
//     ${serumanu.nome},
//     ${serumanu[`idade`]},
//     ${serumanu[`endereco`][logradouro]},
//     ${serumanu[`endereco`][`numeroRua`]}
//   `
//   )



// Função de alta ordem ( higer order function)
// function f (funcao){
//     //callable
//     funcao()
// }
// // Função de alta ordem ( higer order function)
// function g (){
//     function outraFuncao(){
//         console.log("Fui criada or G")    
// }
//     return outraFuncao
// }
//f(g)
//f(g())
//f(g()())


//const gResult = g()
//gResult()
//g()()
//g()()()
//console.log(g()())
//g()()()


//let umaFuncao = function (){
//    console.log(`Fui armazenaa em uma variável`)
//}
//umaFuncao()

//f(function(){console.log("Estou sendo passada para f")}) 

//const devolveUmValor = () => 2
//console.log(devolveUmValor())
//console.log(devolveUmValor)

//const exibeOi = (nome) => console.log(`Oi, &{nome}`)
//exibeOi(`João`)

//(valor) => valor * 2 
//const dobro = (valor) => {return valor * 2}
//console.log(dobro(1))

//const hello = () => console.log(`Hello`)
//hello()
// ()=>{}

/*
const triplo = function (n = 5){
    return 3 + n
}
console.log(triplo(7))
console.log(triplo())
console.log(triplo(undefined))
console.log(triplo(null))
console.log(triplo('abc'))
*/
//valorpadrãoparaoparâmetro 7 consttriplo=function(n=5){ 8 return3*n; 9 }; 10 console.log(triplo()); 11 console.log(triplo(10));

/*
function soma (a, b){
    if(a !== 0 && b !== 0)
        return a + b;
} 
    const res = soma (2 , 3)
    console.log(res)
*/
/*function hello (){
    console.log(`Oi`)
}
//Esa eh a chamada da função, 
//Eh onde dizemos que ela deve ser colocada em execução
hello()

function hello (nome){
    console.log(`Oi, ${nome}`)
}
hello(`Maria e João`)
*/

// //mais antigo: function
// //mais moderno: arrow functions

// function hello (){
//   console.log('Oi')
// }
// hello(1)

// function hello (nome){
//   console.log (`Oi, ` + nome)
// }
// hello('Pedro')





// const nome = "Comecei uma string e preciso de aspas simples: '''''''''"
// const n = '""""""\"ana'

// //métodos de vetores
// const nomes = ['Ana Maria', "Antonio", "Rodrigo", "Alex", "Cristina"]
// //filter
// const apenasComA = nomes.filter((n) => {return n.startsWith("A")})
// console.log(apenasComA)

// //vetor que contenha a primeira letra de cada nome
// const primeirasLetras = nomes.map((nome) => {return nome.charAt(0)})
// console.log(primeirasLetras)

// const todosComecamComA = nomes.every((nome) => {return nome.startsWith('A')})

// console.log(todosComecamComA)

// const valores = [1, 2, 3, 4]
// //reduce
// const soma = valores.reduce((ac, v) => {return ac + v})
// console.log(soma)




// v2 = [2, 'abc', true, [1, 2, 3]]
// // console.log(v2)
// for (let i = 0; i < v2.length; i++){
//   console.log(v2[i])
// }
// //declaração
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)





// console.log(1 == 1)
// console.log (1 == '1')
// console.log (1 === 1)
// console.log (1 === '1')
// console.log (true == 1)
// console.log(1 == [1])
// console.log (null == null)
// console.log (null == undefined)
// console.log([] == false)
// console.log([] == [])

//===: compara por tipo e depois por valor. Se os tipos forem diferentes, ele já resulta em false. Caso contrário, compara os valores.
// ==:  compara por valor. Se os tipos forem diferentes, faz coerção implícita.
// por que não usar ==?
// const n1 = 2 '2'
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// console.log (n1 + Number(n2))

// var idade = 18
// console.log(`Olá, ${nome}`)
// //hoist
// //içamento
// if (idade >= 18){
//   let nome = 'Maria'
//   console.log (`Parabéns, ${nome}. Você já pode dirigir`)
// }
// console.log(`Até mais, ${nome}`)



// let linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// let linguagem = "Java"
// console.log("Aprendendo " + linguagem)

// int a = 2;
// int a = 3;

// //ECMAScript 6
// var assimTambem = "var também serve"
// assimTambem = "outra"
// assimTambem = false

// let a = 1
// let b = false
// let c = "oi"
// a = 2
// //var, let, const
// // //String s = 1
// // s.substring(2, 5);0
// const nome = 'José'
// // nome = "João"
// nome = 123
// nome = true
// const outroNome = "Maria"
// const aindaOutroNome = `Pedro`


//esse é um comentário em Javascript (de uma única linha)
/*
Esse é um comentário
de múltiplas linhas
*/ 