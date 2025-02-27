/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        const botaoSelecionado = document.querySelector(".selecionado");
//Transformar em função
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        imagens[indice].classList.add("ativa");

        const informacaoAtiva = document.querySelector(".informacoes.ativa");
        informacaoAtiva.classList.remove("ativa");
        
        informacoes[indice].classList.add("ativa");
        

    });
});