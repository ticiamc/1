let listaDeNumerosSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random()* numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
console.log(numeroSecreto);


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); Se eu quisesse que o site "falasse"
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto' );
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcertou = `Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', mensagemAcertou);
        exibirTextoNaTela('p', 'Você arrasou');
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
       let maiorMenor = chute>numeroSecreto? 'menor' : 'maior';
       let mensagemMaiorMenor = `O número secreto é ${maiorMenor} que ${chute}`;
       exibirTextoNaTela('p', mensagemMaiorMenor);
        
        tentativas++
        limparCampo();
    }

   
   
    
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}