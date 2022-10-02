// Primeiro vamos definir os algarismos diferentes que irão compor o número aleatório:

let firstNumber = Math.floor(Math.random()*10);

let secondNumber = Math.floor(Math.random()*10);
    while (secondNumber == firstNumber) {
        secondNumber = Math.floor(Math.random()*10);
    }

let thirdNumber = Math.floor(Math.random()*10);
    while (thirdNumber == secondNumber|| thirdNumber == firstNumber) {
        thirdNumber = Math.floor(Math.random()*10);
    }

let forthNumber = Math.floor(Math.random()*10);
    while (forthNumber == thirdNumber|| forthNumber == secondNumber || forthNumber == firstNumber) {
        forthNumber = Math.floor(Math.random()*10);
    }

let secretNumber = [firstNumber, secondNumber, thirdNumber, forthNumber];

// Criamos então as variáveis onde irão ficar alocados a tentativa, quantidade de números na posição certa e a quantidade de números na posição errada, respectivamente.

let guessNumber = []

let acertos = [0]

let existencia = []

// Keypress para ativarmos o input do HTML pela tecla "Enter" do teclado:

document.addEventListener("keypress", function(e) {
    if(e.key == "Enter") {
      Advinhar();
    }  
  });

    console.log(secretNumber);

// Nessa função irá acontecer a jogada para advinhar e comparar o número que digitamos com o número secreto. Ela será ativada assim que clicarmos no botão "Advinhar" ou apertarmos o "Enter":

function Advinhar(){

    let elementoResultado = document.getElementById("resultado");
    let guessNumber = (document.getElementById("number").value)
    
// Nessa parte iremos comparar os números, para sabermos a quantidade de elementos que estão na posição correta em relação ao número secreto:

    for (let i = 0; i < secretNumber.length; i++){
        if ( secretNumber[i] == guessNumber[i]) {
        acertos++;
        }   
    }

// Iremos fazer um filtro dos elementos para sabermos a quantidade de elementos que a nossa tentativa possuí em relação ao número secreto, assim como criar uma variável para a quantidade de existencia:

    secretNumber.filter(function(element) {
        if (guessNumber.includes(element)) {
            existencia.push(element)
        }
    });
    
    let existenciaNumber = existencia.length;
    existenciaNumber = existenciaNumber - acertos

    console.log("Quantidade de acertos:" + " " + acertos);
    console.log("Quantidade de existência:" + " " + existenciaNumber);
    console.log(guessNumber);
    console.log("Array de elementos existentes:" + " " + existencia);

// Vamos limpar o campo das variáveis e o input, após a tentativa:
    // guessNumber = [];
    // acertos = [0];
    // existencia = [];
    // document.getElementById("number").value = "";

    let plays = [acertos, existencia, guessNumber];
    MostrarNaTela();

console.log(plays)
}

// Vamos agora criar uma nova função para adicionar os dados na tabela, que mostrará a quantidade de acertos, a quantidade de existência e o palpite do jogador.




function MostrarNaTela(){

}




// function MostrarNaTela(plays){
//     let historico = ""
//     for (let i = 0; i < plays.length; i++) {
//         historico = plays[i]
//     }
//     let tabelaplays = document.getElementById("plays");
//     tabelaplays.innerHTML = historico;
// }



