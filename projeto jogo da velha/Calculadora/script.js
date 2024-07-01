let num1;
let num2;
let total;



function entrada(){
    //armazena nas variaveis os valores de input
num1 = document.getElementById("n1").value;
num2 = document.getElementById("n2").value;

num1 = parseFloat(num1);
num2 = parseFloat(num2);


}
//calcular e exibir na tela
function somar(){
    entrada()
total = document.getElementById("resultado");
total.innerHTML = num1 + num2;

}

//calcular e exibir na tela
function subtrair(){
    entrada()
    total = document.getElementById("resultado");
    total.innerHTML = num1 - num2;
    
    }

    //calcular e exibir na tela
function multiplicar(){
    entrada()
    total = document.getElementById("resultado");
    total.innerHTML = num1 * num2;
    
    }

    function dividir(){
        entrada()
        total = document.getElementById("resultado");
        total.innerHTML = num1 / num2;
        
        }

        function limpar(){
total = document.getElementById("resultado")
total.innerHTML="";
document.getElementById("n1").value="";
ocument.getElementById("n2").value="";


        }