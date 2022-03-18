//variavel que armazena a lista
const listaDeTeclas = document.querySelectorAll('.tecla');

//laço de repetição para percorrer toda a lista
for(let i = 0; i <= listaDeTeclas.length; i++){
    
    const teclaMomento = listaDeTeclas[i];
    const somEscolhido = teclaMomento.classList[1];
    //template string
    const idAudio = `#som_${somEscolhido}`;

    listaDeTeclas[i].onclick = function (){

        executaSom(idAudio);

    }

    teclaMomento.onkeydown = function(evento){

        if(evento.code === "Enter" || evento.code === "Space"){

            teclaMomento.classList.add('ativa');

        }
        

    }
    teclaMomento.onkeyup = function (){

        teclaMomento.classList.remove('ativa');

    }
           
}

//função que executa o som
function executaSom(seletorAudio){


    const elemento = document.querySelector(seletorAudio);

    //elemento != null ou elemento, o javascript ja entende e verifica se a constante está nula ou sem tem algo
    if(elemento && elemento.localName === 'audio'){

          elemento.play();

        
    }
    else{

        console.log('Elemento não encontrado ou seletor inválido!');

    }
    
}
