let nome = "aparecido";
let sobrenome = "inacio dos santos";
let idade = 42;
let anoNascimento = 1982;

console.log("----------imprimindo no console jeito simples-----------");
console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log (anoNascimento);



console.log("-----------imprimindo no console utilizando a concatenação-----------");

console.log("seu nome é : " +nome+  "sobrenome:" +sobrenome+ "sua idade é: "+idade+ " Ano de nascimento: "+anoNascimento );

console.log("-------------imprimindo no console utilizando a template string ---------------");
console.log(` Nome é: ${nome} seu sobrenome: ${sobrenome} idade: ${idade} ano nascimento: ${anoNascimento}`);