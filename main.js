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
           
}

//função que executa o som
function executaSom(idSom){

    document.querySelector(idSom).play();

}

/*
let contador = 0;

while(contador <= listaDeTeclas.length){

    listaDeTeclas[contador].onclick = executaSom;
    contador++;

}
*/
