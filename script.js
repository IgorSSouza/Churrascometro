//Declarando as variáveis e pegando o id do html pelo JS

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

//Função que faz o calculo da quantidade de alimentos por pessoas e a duração.

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = qtdCarne(duracao) * adultos + (qtdCarne(duracao)/2 * criancas);
    let qtdTotalCerveja = qtdCerveja(duracao) * adultos;
    let qtdTotalBebidas = qtdBebidas(duracao) * adultos + (qtdCarne(duracao)/2 * criancas);

    resultado.innerHTML = `<p> - ${qtdTotalCarne/1000} Kg de Carne. <p/>`
    resultado.innerHTML += `<p> - ${Math.ceil(qtdTotalCerveja/355)} Latinhas de Cerveja. <p/>`
    resultado.innerHTML += `<p> - ${Math.ceil(qtdTotalBebidas/2000)} Litros de Bebidas (Refri, sucos). <p/>`

}

//Cada função tem uma lógica de pegar todos os valores e retorna para fazer o calculo na função "Calcular()"

function qtdCarne(duracao){

    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function qtdCerveja(duracao){

    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function qtdBebidas(duracao){

    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}