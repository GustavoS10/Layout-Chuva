//Funções dos botões de ler mais e respostas
function lermais(){
    var ponto = document.getElementById("tres");
    var mais = document.getElementById("mais");
    var botao = document.getElementById("btnLerMais");

    if(ponto.style.display === "none"){
        ponto.style.display = "inline";
        mais.style.display = "none";
        botao.innerHTML = "ver mais";
    }else{
        ponto.style.display = "none";
        mais.style.display = "inline";
        botao.innerHTML = "ver menos";
    }
    return lermais();
}
function lermais2(){
    var ponto = document.getElementById("tres2");
    var mais2 = document.getElementById("mais2");
    var botao = document.getElementById("btnLerMais2");
    
    if(ponto.style.display === "none"){
        ponto.style.display = "inline";
        mais2.style.display = "none";
        botao.innerHTML = "4 Resposta";
    }else{
        ponto.style.display = "none";
        mais2.style.display = "inline";
        botao.innerHTML = "ver menos";
    }
    return lermais2();
}
function lermais3(){
    var ponto = document.getElementById("tres3");
    var mais3 = document.getElementById("mais3");
    var botao = document.getElementById("btnLerMais3");
    
    if(ponto.style.display === "none"){
        ponto.style.display = "inline";
        mais3.style.display = "none";
        botao.innerHTML = "1 Resposta";
    }else{
        ponto.style.display = "none";
        mais3.style.display = "inline";
        botao.innerHTML = "ver menos";
    }
    return lermais2();
}
function topicos(){
    var mais3 = document.getElementById("form");
    var botao = document.getElementById("btnTopico");
    
    if(mais3.style.display === "none"){
        mais3.style.display = "inline";
        botao.innerHTML = "";
    }else{
        mais3.style.display = "none";
        botao.innerHTML = "ver menos";
    }
    return topicos();
}