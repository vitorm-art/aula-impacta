// alert('Hello World!!!')
console.log('Hello world!!!');

var nome;
var valorCurso = 550.42;

nome = 'Impacta';


// console.log(valorCurso + 10.00);
// console.log(valorCurso - 10.00);
// console.log(valorCurso * 10.00);
// console.log(valorCurso / 10.00);

var idade = 10;
var soma;

soma= --idade;



// console.log (soma)

/* Contacatenação e Interpolação */
var firstName = "Camila";
var lastName = "da Silva";

var nomeCompletoC = firstName + ' ' + lastName;
var nomeCompletoI = `Nome: ${firstName} ${lastName}`;
// console.log(nomeCompletoI)

/*Operadores relacionais */
// Operators: ==,===. !=, !==, >=, >, <, <=
// + Operador unario
var val1 = +"10";
var val2 = 10;
var comparar = val1 >= val2;
// console.log(comparar);

/* Truthy e Falsy */
var contrato = "";

// console.log(contrato)

/* Estrutura de seleção */
// var notaAluno = 8
// var nomeAluno = "Paulo Enrique"
// var faltas = 10

// // se o aluno tiver uma nota >= 7 aprovado e faltas <= 5
// // se menor que 5 é reprovado
// // se estiver >= 5 recuperação

// if(notaAluno >= 7 && !(faltas <= 5)) {
//     console.log("Aprovado")
// } 
// else if(notaAluno >=5 %% faltas <= 5)
//     console.log ('Recuperação')

// else {
//     console.log('Reprovado')
// }

// 

//  var nomeCLiente = prompt ('digite seu nome')

/* let é para criar variaveis */
let contratoAluguel = 'Fechado'
contratoAluguel = 'Aberto'

/* const para criar constantes */
const pi = 3.41

let circulo = 50 * pi


// console.log(contratoAluguel)
/* Estrutura de repetição */

 for(let interacao = 0; interacao <dadosPessoais.length; interacao++) {

     if (dadosPessoais[interacao] === 6200) {
         dadosPessoais[interacao] = 7000
         
     }
     console.log(dadosPessoais[interacao])


}     

// let interacao = 0

// while(interacao > 10) {
//     console.log (interacao)
//     console.log ('-------')

//     interacao++
// }

/* Array */

const dadosPessoais = [4000, 5000 , 8000 ,6000, 4000]

console.log(dadosPessoais.length)
