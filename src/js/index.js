// alert('Olá');
// Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente 


// passo 1 dar um jeito de pegar oHTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
// console.log(botoesCarrossel);

const imagens = document.querySelectorAll('.imagem')

//passo 2 dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {


        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        console.log(imagens);
        imagens[indice].classList.add('ativa');
        


    })
})






