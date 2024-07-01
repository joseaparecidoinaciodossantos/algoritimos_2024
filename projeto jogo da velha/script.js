   var jogador = "x";

function jogar (celula){

//verificar se a celula esta vazia
if (celula.innerHTML=== ""){
    //escreva na celula
    celula.innerHTML = jogador;

    //alterar jogada
    //se jogada for igual a "x"
    if(jogador === "x"){
        jogador = "o";
        celula.style.backgroundcolor="red";
       
    }else{  //se jogada for "o"
      
        jogador ="x";
        celula.style.backgroundcolor="blue";
    }
}



}
function reiniciar(){
    window.location.reload();

}let nomes = ['julio' ,' martin', 'steve', 'alex' , 'jhonas' , 'mario'];
//posições      0           1         2       3         4          5          indexadores

alert(nomes[2]);
//funcao para gerar a batalha
function gerarBatalha(){
let  nome1 = nomes[ Math.floor( Math.random () * nomes.length )];
let  nome2 = nomes[ Math.floor( Math.random ()* nomes.length )];

//gera batalha de novo,quando nome1 for igual a nome2
if(nome1=== nome2){
    gerarBatalha();
}else{


//escrva na tela
document.getElementById('jogadores').textContent = nome1 + " vs "  + nome2;

//imprime no console a batalha da vez
//essas são duas formas de se fazer, que darao o mesmo sentido
console.log(`batalha da vez: ${nome1} x ${nome2}`);
console.log("batalha da vez:" + nome1 + "x" + nome2);

//entendendo logica do sorteio
let numero = Math.random();
console.log('numero sorteado:'+ numero);
console.log('posicao da lista sem arredondar:'+ numero * nomes.length);
console.log('posicao da lista arredondado:'+ Math.floor(numero * nomes.length));
console.log('nome sorteado: ' + nomes[ Math.floor(numero * nomes.length)]);


}

}

function adicionar(){
var nome = document.getElementById('nome').Value;
//adicionar valor de nome na lista
nomes.push(nome);

var nome = document.getElementById('nome'). value="";



}
function listar(){
var listagem = document.getElementById("lista");
//limpar lista
listagem.innerHTML= "";
//roda enquanto contador for menor que o tamanho da lista- 6
for (var contador=0; contador < nomes.length;contador++){
var item = document.creatElement("li");
var valor = nomes[contador];
item.innerHTML = valor;
listagem.appendChild(item);


}


}