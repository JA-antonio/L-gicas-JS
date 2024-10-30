

let clique = 0;
let resul = document.querySelector('p#clique');

function clienteclicou() {
    
    clique++;
    resul.innerHTML = ` O total de cliques foi : ${clique}`;

}

function restart() {

    clique = 0;
    resul.innerHTML = `O total de cliques foi : ${clique}`;
    
    if (resul.length == 0) {
        window.alert ('Sem contagem para fazer o reset!');
        resul.innerHTML = ' ';
    }
}

function limpar() {

    clique = 0;
    resul.innerHTML = ``;
}

function bloquear() {

    clique = clique;


}

