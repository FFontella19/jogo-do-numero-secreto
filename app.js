let listaDeNumerosSorteados=[];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

//função com parâmetros, executa mas não devolve uma informação.
function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
    function exibirMensagemInicial(){
        exibirTextoNaTela('h1','Jogo do número secreto');
        exibirTextoNaTela('p','Escolha um número entre 1 e 100');
    }
    
    exibirMensagemInicial();

//função sem parâmetros e sem retorno (não devolve informação)
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
       exibirTextoNaTela('p', 'o número secreto é menor.');  
        }else{
        exibirTextoNaTela('p','o número secreto é maior');
       }   
       tentativa++;
       limparCampo();
    }
}


// função que retorna uma informação e sem parâmetros.
// "return" retorna informação
//gera um número aleatório entre 1 e 10
function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNALista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNALista == numeroLimite){
    listaDeNumerosSorteados =[];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}
//limpa o valor atribuído ao campo input
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}