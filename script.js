let imagens = [
    "imagem6.jpg",
    "imagem11.jpg",
    "imagem7.jpg",
    "imagem9.jpg",
    "imagem8.jpg",
    "imagem12.jpg"
];

let indice = 0;

let banner = document.getElementById("imagem");

function trocarImagem(){

    indice++;

    if(indice >= imagens.length){
        indice = 0;
    }

    banner.src = imagens[indice];
}

setInterval(trocarImagem, 3000);