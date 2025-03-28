function jogarDados() {

//Player 1
var randomNumber1 = Math.floor(Math.random()* 6) + 1; // floor converte para int, random aleatorio//Player1
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "imagens/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//Player 2 
var randomNumber2 = Math.floor(Math.random()* 6) + 1; // floor converte para int, random aleatorio
var randomImageSource2 = "imagens/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// condições de vitória ou empate

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 venceu!";
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 venceu!";   
} 
else {
    document.querySelector("h1").innerHTML = "Deu empate!";      
}
}

// Inicia o jogo ao carregar a página
jogarDados();

// Função para reiniciar o jogo ao clicar no botão
document.getElementById("AtualizaBotao").addEventListener("click", function() {
    jogarDados(); // Reinicia o jogo ao clicar no botão
    console.log("Jogo reiniciado!");
});