// ================================
// ELEMENTOS DAS TELAS
// ================================

const botaoInicio = document.getElementById("botaoInicio");
const botaoPresente = document.getElementById("botaoPresente");
const botaoFotos = document.getElementById("botaoFotos");

const telaInicio = document.getElementById("telaInicio");
const telaPresente = document.getElementById("telaPresente");
const telaCarta = document.getElementById("telaCarta");
const telaGaleria = document.getElementById("telaGaleria");


// ================================
// PRIMEIRA TELA
// ================================

botaoInicio.addEventListener("click", function() {
  
  telaInicio.style.display = "none";
  
  telaPresente.style.display = "block";
  
});


// ================================
// PRESENTE 🎁
// ================================

botaoPresente.addEventListener("click", function() {
  const musicaFundo = document.getElementById("musicaFundo");

musicaFundo.play();
  
  botaoPresente.style.animation = "none";
  
  botaoPresente.style.transition =
    "transform 0.5s ease";
  
  botaoPresente.style.transform =
    "scale(1.3) rotate(5deg)";
  
  
  setTimeout(function() {
    
    botaoPresente.style.transform =
      "scale(0) rotate(-10deg)";
    
  }, 500);
  
  
  setTimeout(function() {
    
    telaPresente.style.display = "none";
    
    telaCarta.style.display = "block";
    
  }, 1000);
  
});


// ================================
// EFEITO DE ESCRITA DA CARTA
// ================================

const textosCarta =
  document.querySelectorAll(".textoCarta");


botaoFotos.style.opacity = "0";
botaoFotos.style.visibility = "hidden";


let textoAtual = 0;


function escreverTexto() {
  
  if (textoAtual >= textosCarta.length) {
    
    // Todos os textos terminaram
    
    botaoFotos.style.visibility = "visible";
    
    botaoFotos.style.transition =
      "opacity 1s ease";
    
    botaoFotos.style.opacity = "1";
    
    return;
    
  }
  
  
  const texto = textosCarta[textoAtual];
  
  const textoOriginal =
    texto.textContent.trim();
  
  texto.textContent = "";
  
  let indice = 0;
  
  
  function escrever() {
    
    if (indice < textoOriginal.length) {
      
      texto.textContent +=
        textoOriginal.charAt(indice);
      
      indice++;
      
      setTimeout(escrever, 25);
      
    } else {
      
      textoAtual++;
      
      setTimeout(escreverTexto, 500);
      
    }
    
  }
  
  
  escrever();
  
}


escreverTexto();


// ================================
// BOTÃO PARA VER AS FOTOS
// ================================

botaoFotos.addEventListener("click", function() {
  
  telaCarta.style.display = "none";
  
  telaGaleria.style.display = "block";
  
});

// ================================
// BOTÃO CONTINUAR - MOMENTO
// ================================

const botaoMomento = document.getElementById("botaoMomento");
const telaMomento = document.getElementById("telaMomento");

botaoMomento.addEventListener("click", function() {
  telaGaleria.style.display = "none";
  telaMomento.style.display = "block";
});


// ================================
// CARROSSEL DE FOTOS
// ================================

const imagemGaleria =
  document.getElementById("imagemGaleria");

const legendaGaleria =
  document.getElementById("legendaGaleria");

const fotoAnterior =
  document.getElementById("fotoAnterior");

const proximaFoto =
  document.getElementById("proximaFoto");
  
  const indicadores =
  document.getElementById("indicadores");

const fotos = [
  
  {
    imagem: "fotocasal.jpg",
    legenda: "Cada momento ao seu lado se torna especial. ❤️"
  },
  
  {
    imagem: "fotocasal.jpg",
    legenda: "Um dos muitos momentos que quero guardar para sempre. ❤️"
  },
  
  {
    imagem: "fotocasal.jpg",
    legenda: "Que venham muitos outros momentos como esse. 🥰"
  },
  
  {
    imagem: "fotocasal.jpg",
    legenda: "Nosso dia 01. ❤️"
  }
  
];

let fotoAtual = 0;


// CRIAR INDICADORES

fotos.forEach(function(_, indice) {
  
  const indicador =
    document.createElement("div");
  
  indicador.classList.add("indicador");
  
  indicador.addEventListener("click", function() {
    
    fotoAtual = indice;
    
    mostrarFoto();
    
  });
  
  indicadores.appendChild(indicador);
  
});

// MOSTRAR FOTO

function mostrarFoto() {
  
  imagemGaleria.src =
    fotos[fotoAtual].imagem;
  
  legendaGaleria.textContent =
    fotos[fotoAtual].legenda;
    
    // ATUALIZAR INDICADOR

const todosIndicadores =
  document.querySelectorAll(".indicador");

todosIndicadores.forEach(function(indicador, indice) {
  
  indicador.classList.toggle(
    "ativo",
    indice === fotoAtual
  );
  
});
  
}


// PRÓXIMA FOTO

function proxima() {
  
  fotoAtual++;
  
  if (fotoAtual >= fotos.length) {
    
    fotoAtual = 0;
    
  }
  
  mostrarFoto();
  
}


// FOTO ANTERIOR

function anterior() {
  
  fotoAtual--;
  
  if (fotoAtual < 0) {
    
    fotoAtual = fotos.length - 1;
    
  }
  
  mostrarFoto();
  
}


// BOTÕES

proximaFoto.addEventListener("click", proxima);

fotoAnterior.addEventListener("click", anterior);


// ================================
// SWIPE NO CELULAR
// ================================

let toqueInicial = 0;
let toqueFinal = 0;


imagemGaleria.addEventListener("touchstart", function(event) {
  
  toqueInicial = event.touches[0].clientX;
  
});


imagemGaleria.addEventListener("touchend", function(event) {
  
  toqueFinal = event.changedTouches[0].clientX;
  
  const distancia =
    toqueFinal - toqueInicial;
  
  
  // Deslizou para a esquerda
  
  if (distancia < -50) {
    
    proxima();
    
  }
  
  
  // Deslizou para a direita
  
  if (distancia > 50) {
    
    anterior();
    
  }
  
});

// ================================
// PARTÍCULAS DO FUNDO
// ================================

const camadaParticulas =
  document.createElement("div");

camadaParticulas.classList.add("particulas");

document.body.prepend(camadaParticulas);


for (let i = 0; i < 70; i++) {
  
  const particula =
    document.createElement("div");
  
  particula.classList.add("particula");
  
  
  // Posição aleatória
  
  particula.style.left =
    Math.random() * 100 + "%";
  
  particula.style.top =
    Math.random() * 100 + "%";
  
  
  // Tamanho aleatório
  
  const tamanho =
    Math.random() * 3 + 1;
  
  particula.style.width =
    tamanho + "px";
  
  particula.style.height =
    tamanho + "px";
  
  
  // Animação aleatória
  
  particula.style.animationDelay =
    Math.random() * 5 + "s";
  
  particula.style.animationDuration =
    Math.random() * 4 + 4 + "s";
  
  
  camadaParticulas.appendChild(particula);
  
}
